import { NavigationComponent } from './navigation/navigation.component';
import { CtaContactComponent } from './cta-contact/cta-contact.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import { TestimonialSliderComponent } from './testimonial-slider/testimonial-slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccessibilitySettingsComponent } from './accessibility-settings/accessibility-settings.component';

@NgModule({
  declarations: [
    TestimonialSliderComponent,
    SubNavigationComponent,
    SliderComponent,
    FooterComponent,
    CtaContactComponent,
    NavigationComponent,
    AccessibilitySettingsComponent
  ],
  imports: [BrowserModule, CommonModule, RouterModule],
  exports: [TestimonialSliderComponent, SubNavigationComponent, SliderComponent, FooterComponent, CtaContactComponent, NavigationComponent, RouterModule, AccessibilitySettingsComponent],
  providers: [],
  bootstrap: []
})
export class SharedModule {}
