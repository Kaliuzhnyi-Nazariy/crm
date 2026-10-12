import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID, Service } from '@angular/core';

@Service()
export class LocalStorage {
  constructor() {}

  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  setItem = (key: string, value: unknown): void => {
    if (!this.isBrowser) return;

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error in setting in localStorage fn: ', error);
    }
  };

  getItem = <T>(key: string): T | null => {
    if (!this.isBrowser) return null;

    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.log('Error in getting from localStorage: ', error);
      return null;
    }
  };

  removeItem = (key: string): void => {
    if (!this.isBrowser) return;

    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error in deleting from localStorage: ', error);
    }
  };
}
