import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  template: `
    <span
      class="skeleton"
      [class.skeleton--circle]="variant === 'circle'"
      [class.skeleton--button]="variant === 'button'"
      [style.width]="width"
      [style.height]="height"
      [style.border-radius]="borderRadius"
      aria-hidden="true"
    ></span>
  `,
  styles: [
    `
      .skeleton {
        display: inline-block;
        vertical-align: middle;
        max-width: 100%;
        background: linear-gradient(
          90deg,
          var(--skeleton-base) 0%,
          var(--skeleton-highlight) 50%,
          var(--skeleton-base) 100%
        );
        background-size: 200% 100%;
        animation: skeleton-shimmer 1.25s ease-in-out infinite;
        border-radius: 6px;
      }

      .skeleton--circle {
        border-radius: 50%;
        flex-shrink: 0;
      }

      .skeleton--button {
        border-radius: 8px;
      }

      @keyframes skeleton-shimmer {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .skeleton {
          animation: none;
          background: var(--skeleton-base);
        }
      }
    `,
  ],
})
export class SkeletonComponent {
  @Input() width = '100%';
  @Input() height = '0.875rem';
  @Input() variant: 'text' | 'circle' | 'button' = 'text';
  @Input() borderRadius?: string;
}
