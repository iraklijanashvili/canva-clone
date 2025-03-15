/**
 * Design Models Type Definitions
 * 
 * This file contains TypeScript interfaces for design-related data models
 * used throughout the application.
 */

/**
 * DesignElement Interface
 * Represents a basic element in a design
 */
export interface DesignElement {
  id: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  opacity: number;
}

/**
 * TextElement Interface
 * Represents a text element in a design
 */
export interface TextElement extends DesignElement {
  type: 'text';
  text: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  textAlign: string;
  fill: string;
}

/**
 * ShapeElement Interface
 * Represents a shape element in a design
 */
export interface ShapeElement extends DesignElement {
  type: 'shape';
  shapeType: 'rectangle' | 'circle' | 'triangle' | 'ellipse' | 'polygon';
  fill: string;
  stroke: string;
  strokeWidth: number;
}

/**
 * ImageElement Interface
 * Represents an image element in a design
 */
export interface ImageElement extends DesignElement {
  type: 'image';
  src: string;
  filters?: string[]; // Applied image filters
}

/**
 * Design Interface
 * Represents a complete design with all its elements
 */
export interface Design {
  id: string;
  name: string;
  width: number;
  height: number;
  backgroundColor: string;
  elements: (TextElement | ShapeElement | ImageElement)[];
  createdAt: Date;
  updatedAt: Date;
} 