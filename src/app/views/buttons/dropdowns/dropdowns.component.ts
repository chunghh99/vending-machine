import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  CollapseDirective,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormControlDirective,
  FormDirective,
  NavbarBrandDirective,
  NavbarComponent,
  NavbarNavComponent,
  NavbarTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  RowComponent,
  TextColorDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ThemeDirective,
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    RouterLink,
    DropdownDividerDirective,
    NavbarComponent,
    ContainerComponent,
    NavbarBrandDirective,
    NavbarTogglerDirective,
    CollapseDirective,
    NavbarNavComponent,
    NavItemComponent,
    NavLinkDirective,
    ReactiveFormsModule,
    FormDirective,
    FormControlDirective,
    ButtonGroupComponent
  ]
})
export class DropdownsComponent {

  public colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];

  constructor() { }

}
