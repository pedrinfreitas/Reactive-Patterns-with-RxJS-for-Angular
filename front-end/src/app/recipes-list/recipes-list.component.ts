import { Recipe } from './../core/model/recipe';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RecipesService } from '../core/services/recipes.service';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent implements OnInit, OnDestroy {
  // recipes!: Recipe[] | any;

  // destroy$ = new Subject<void>();

  constructor(private service: RecipesService) {}

  recipes$ = this.service.recipes$;

  ngOnInit(): void {
    // this.service
    //   .getRecipes()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((result) => {
    //     this.recipes = result;
    //   });
  }

  ngOnDestroy(): void {
    // this.destroy$.next();
    // this.destroy$.complete();
  }
}
