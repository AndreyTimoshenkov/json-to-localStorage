import { Injectable } from '@angular/core';
import { ProjectInterface } from '../interfaces/project-interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  public getAllItems(): ProjectInterface[]  {
    let result = [];
    for (let i = 1; i <= localStorage.length; i++) {
      let item = localStorage.getItem(String(i))
      if (typeof item === 'string') {
        const project = JSON.parse(item) as ProjectInterface
      result.push(project);
      }
    }
    return result;
  }
  
}
