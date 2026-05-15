import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';

@Component({
  selector: 'app-card-list-skeleton',
  standalone: true,
  imports: [CommonModule, SkeletonComponent],
  template: `
    <div class="card-list-skeleton" aria-busy="true" [attr.aria-label]="ariaLabel">
      @for (card of cardIndices; track card) {
        <div class="card-list-skeleton__card">
          <div class="card-list-skeleton__top">
            @if (showCheckbox) {
              <app-skeleton variant="circle" width="18px" height="18px" />
            }
            <div class="card-list-skeleton__titles">
              <app-skeleton width="55%" height="1rem" />
              <app-skeleton width="72%" height="0.8125rem" />
            </div>
          </div>
          <div class="card-list-skeleton__fields">
            @for (field of fieldIndices; track field) {
              <div class="card-list-skeleton__field" [class.card-list-skeleton__field--wide]="field === 0">
                <app-skeleton width="40%" height="0.75rem" />
                <app-skeleton [width]="field === 0 ? '90%' : '65%'" height="0.875rem" />
              </div>
            }
          </div>
          <div class="card-list-skeleton__actions">
            <app-skeleton variant="button" width="100%" height="2.5rem" />
          </div>
        </div>
      }
    </div>
  `,
  styles: [
    `
      .card-list-skeleton {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .card-list-skeleton__card {
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow);
        padding: 14px;
      }

      .card-list-skeleton__top {
        display: flex;
        align-items: flex-start;
        gap: 12px;
      }

      .card-list-skeleton__titles {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .card-list-skeleton__fields {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px 12px;
        margin-top: 12px;
      }

      .card-list-skeleton__field {
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 0;
      }

      .card-list-skeleton__field--wide {
        grid-column: 1 / -1;
      }

      .card-list-skeleton__actions {
        margin-top: 14px;
      }
    `,
  ],
})
export class CardListSkeletonComponent {
  @Input() count = 4;
  @Input() fieldsCount = 3;
  @Input() showCheckbox = false;
  @Input() ariaLabel = 'Loading list';

  get cardIndices(): number[] {
    return Array.from({ length: this.count }, (_, i) => i);
  }

  get fieldIndices(): number[] {
    return Array.from({ length: this.fieldsCount }, (_, i) => i);
  }
}
