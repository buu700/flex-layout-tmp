/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { MediaChange } from './media-change';
import { BreakPoint } from './breakpoints/break-point';
/**
 * For the specified MediaChange, make sure it contains the breakpoint alias
 * and suffix (if available).
 */
export declare function mergeAlias(dest: MediaChange, source: BreakPoint | null): any;
