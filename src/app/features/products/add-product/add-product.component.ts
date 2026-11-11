import { Component, computed, model, signal } from '@angular/core';
import { ContentComponent } from '../../../core/layout/content/content.component';
import { Button } from '../../../shared/components/button/button.type';
import { Router } from '@angular/router';
import { InfoBlockComponent } from '../../../shared/components/info-block/info-block.component';
import { InputComponent } from './input/input.component';
import { FileInputComponent } from './file-input/file-input.component';
import { TogglerComponent } from './toggler/toggler.component';
import { CountriesDropdownComponent } from './countries-dropdown/countries-dropdown.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { SeoSettingsComponent } from './seo-settings/seo-settings.component';
import { ProductInformationComponent } from './product-information/product-information.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { Option } from './options/type';
import { OptionsComponent } from './options/options.component';
import { ShippingComponent } from './shipping/shipping.component';

@Component({
  imports: [
    ContentComponent,
    InfoBlockComponent,
    InputComponent,
    FileInputComponent,
    TogglerComponent,
    CountriesDropdownComponent,
    CategoriesComponent,
    TagsComponent,
    SeoSettingsComponent,
    ProductInformationComponent,
    ProductPriceComponent,
    OptionsComponent,
    ShippingComponent,
  ],
  selector: 'app-add-product',
  styles: ``,
  host: { class: 'list' },
  styleUrl: '../../../../styles.css',
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  TAX_RATE = 23;

  name = signal<string>('');
  description = signal<string>('');

  images = signal<File[]>([]);

  productPrice = signal<string>('');
  productDiscountPrice = signal<string>('');
  addTax = signal(false);

  // isMultipleOptions = model(false);
  isMultipleOptions = signal(false);

  options = signal<Option[]>([]);
  // addOption = (newOption: Option) => {
  //   this.options.update((currentOptions) => [...currentOptions, newOption]);
  // };

  weight = signal<string>('');
  country = signal<string>('');
  isItDigitalItem = model(false);

  categories = signal<string[]>([]);
  tags = signal<string[]>([]);

  seoTitle = signal<string>('');
  seoDescription = signal<string>('');

  constructor(private router: Router) {}

  cancelButton: Button = {
    name: 'Cancel',
    fn: () => this.router.navigate(['/products']),
  };

  finalPrice = computed(() => {
    const addTax = this.addTax();
    const price = Number(this.productPrice()) || 0;
    const discountPrice = Number(this.productDiscountPrice()) || 0;

    if (!addTax) {
      return {
        taxedPrice: price,
        taxedDiscountPrice: discountPrice,
      };
    }

    const taxedPrice = price + (price * this.TAX_RATE) / 100;
    const taxedDiscountPrice = discountPrice
      ? discountPrice + (discountPrice * this.TAX_RATE) / 100
      : 0;

    return {
      taxedPrice,
      taxedDiscountPrice,
    };
  });

  saveButton: Button = {
    name: 'Save',
    fn: () => {
      const price = this.finalPrice();
      console.log({
        name: this.name(),
        desc: this.description(),
        images: this.images(),
        price: price.taxedPrice,
        discountPrice: price.taxedDiscountPrice,
        options: this.options(),
        weight: this.weight(),
        country: this.country(),
        isDigital: this.isItDigitalItem(),
        categories: this.categories(),
        tags: this.tags(),
        seo: {
          title: this.seoTitle(),
          description: this.seoDescription(),
        },
      });
    },
  };

  position = (toggle: boolean) => computed(() => (toggle ? 'translate-x-full' : 'translate-x-0'));

  bg = (value: boolean) => computed(() => (value ? 'bg-(--primary-100)' : 'bg-(--primary-40)'));
}
