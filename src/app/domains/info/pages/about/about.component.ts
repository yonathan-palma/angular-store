import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '@shered/components/counter/counter.component';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';
import { HighlightDirective } from '@shered/directives/highlight.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    CounterComponent, 
    WaveAudioComponent, 
    HighlightDirective
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000)
  messeges = signal('yolo')

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement
    this.duration.set(input.valueAsNumber)
  }

  changeMesseges(event: Event) {
    const input = event.target as HTMLInputElement
    this.messeges.set(input.value)
  }
}
