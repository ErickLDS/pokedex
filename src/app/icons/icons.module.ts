import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { 
  Menu, 
  Moon, 
  Sun, 
  Plus, 
  X, 
  Search,
  ChevronsDown
} from 'angular-feather/icons';

const icons = {
  Menu,
  Moon,
  Sun,
  Plus,
  X,
  Search,
  ChevronsDown
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
