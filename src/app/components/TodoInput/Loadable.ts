/**
 *
 * Asynchronously loads the component for TodoInput
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TodoInput = lazyLoad(
  () => import('./index'),
  module => module.TodoInput,
);
