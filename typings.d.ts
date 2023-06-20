declare namespace JSX {
    import { PassageElement, PassageProfileElement } from '@passageidentity/passage-elements'
    interface IntrinsicElements {
        "passage-auth": PassageElement;
        "passage-login": PassageElement;
        "passage-register": PassageElement;
        "passage-profile": PassageProfileElement;
    }
}


interface Post {
    id: string;
    createdAt: Date;
    content: string;
    authorId: string;
  }
  