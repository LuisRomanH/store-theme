import { FunctionComponent } from 'react'

declare global {
    interface StorefrontFunctionComponent<P = {}> extends FunctionComponent<P> {
        schema?: object
        getSchema?(props?: P): object
    }

    interface ICard {
      image?: string;
      mobileImage?: string;
      link?: string;
      text?: string;
    }
}
