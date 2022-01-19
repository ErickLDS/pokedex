import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Menu, Moon, Sun, Plus } from 'angular-feather/icons';

const icons = {
  Menu,
  Moon,
  Sun,
  Plus
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
