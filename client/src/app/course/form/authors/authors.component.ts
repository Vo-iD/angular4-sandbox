import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { AuthorsService } from './authors.service';
import { SafeObservableWrapper } from '../../../shared/shared';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsComponent),
      multi: true
    }
  ]
})
export class AuthorsComponent extends SafeObservableWrapper implements ControlValueAccessor {
  public readOnly: boolean;
  public authors: SelectAuthor[];
  private _selectedAuthors: string[];
  private _changed = new Array<(value: any) => void>();

  constructor(private _authorsService: AuthorsService) {
    super();
    this._initAuthors();
  }

  public registerOnChange(fn: any): void {
    this._changed.push(fn);
  }

  public registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.readOnly = isDisabled;
  }

  public writeValue(value: string[]): void {
    this._setSelectedAuthors(value);
  }

  public selectAuthor(author: SelectAuthor) {
    author.selected = !author.selected;
    this._selectedAuthors = this.authors
      .filter((a) => a.selected)
      .map((a) => a.name);

    this._onTouchedCallback();
    this._changed.forEach((f) => f(this._selectedAuthors));
  }

  private _onTouchedCallback: () => void = () => {};

  public set value(value: string[]) {
    this._setSelectedAuthors(value);

    this._changed.forEach((f) => f(value));
  }

  public get value(): string[] {
    return this._selectedAuthors;
  };

  private _setSelectedAuthors(authors: string[]) {
    if (authors) {
      authors.forEach((author) => {
        const foundAuthor = this.authors.find((a) => a.name === author);
        foundAuthor.selected = true;
      });
    }
  }

  private _initAuthors() {
    this._authorsService.getList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((names) => {;
        this.authors = names.map((name) => {
          const author = {
            name,
            selected: false
          } as SelectAuthor;

          return author;
        });
      });
  }
}

interface SelectAuthor {
  name: string;
  selected: boolean;
}
