/**
 * Element Transformation Utilities
 * 
 * This file contains utility functions for transforming design elements
 * including scaling, rotating, and positioning elements on the canvas.
 */

import { DesignElement } from '../types/design-models';

/**
 * Scale an element by a factor
 * @param element The element to scale
 * @param scaleFactor The factor to scale by
 * @returns The scaled element
 */
export const scaleElement = <T extends DesignElement>(
  element: T,
  scaleFactor: number
): T => {
  return {
    ...element,
    width: element.width * scaleFactor,
    height: element.height * scaleFactor,
  };
};

/**
 * Rotate an element by a degree
 * @param element The element to rotate
 * @param degrees The degrees to rotate by
 * @returns The rotated element
 */
export const rotateElement = <T extends DesignElement>(
  element: T,
  degrees: number
): T => {
  return {
    ...element,
    rotation: (element.rotation + degrees) % 360,
  };
};

/**
 * Move an element to a new position
 * @param element The element to move
 * @param x New x coordinate
 * @param y New y coordinate
 * @returns The moved element
 */
export const moveElement = <T extends DesignElement>(
  element: T,
  x: number,
  y: number
): T => {
  return {
    ...element,
    x,
    y,
  };
};

/**
 * Change element opacity
 * @param element The element to change opacity
 * @param opacity New opacity value (0-1)
 * @returns The element with updated opacity
 */
export const changeOpacity = <T extends DesignElement>(
  element: T,
  opacity: number
): T => {
  return {
    ...element,
    opacity: Math.max(0, Math.min(1, opacity)), // Clamp between 0 and 1
  };
};

/**
 * Flip element horizontally
 * @param element The element to flip
 * @returns The flipped element
 */
export const flipElementHorizontally = <T extends DesignElement>(
  element: T
): T => {
  return {
    ...element,
    // When implemented with a real canvas library,
    // this would include proper transformation matrix changes
    // This is a simplified version
    rotation: (180 - element.rotation) % 360,
  };
}; 