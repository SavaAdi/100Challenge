import { style, transition, trigger, animate } from '@angular/animations';

const time = 500;
// They don't need to have the same name. You trigger the animation by using the name from trigger(..)
export const fadeInOutAnimation = trigger('fadeInOutAnimation', [

    // old school of doing this would be transition('* => void')
    transition(':enter', [
        style({ opacity: 0 }),
        animate(time, style({ opacity: 1 }))
    ]),
    transition(':leave', [
        animate(time, style({ opacity: 0 }))
    ])
]);
