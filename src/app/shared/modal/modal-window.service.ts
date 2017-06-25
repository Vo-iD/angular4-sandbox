import { Injectable } from '@angular/core';

@Injectable()
export class ModalWindowService {

  public openConfirmation(question: string): Promise<boolean> {
    if (confirm(question)) {
      return Promise.resolve(true);
    }

    return Promise.resolve(false);
  }
}
