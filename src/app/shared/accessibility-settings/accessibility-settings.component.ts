import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessibility-settings',
  templateUrl: './accessibility-settings.component.html',
  styleUrls: ['./accessibility-settings.component.scss']
})
export class AccessibilitySettingsComponent {
  toggleContrastMode() {
    let bodyelement = document.querySelector('body');
    if (!bodyelement){
      return
    }
    if (bodyelement.className === 'accessibility-mode') {
      bodyelement.className = '';
    } else {
      bodyelement.className = 'accessibility-mode';
    }
  }
}
