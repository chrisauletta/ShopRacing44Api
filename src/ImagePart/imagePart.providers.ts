import { ImagePart } from "./imagePart.entity";

export const imagePartsProviders = [{ provide: 'ImagePartsRepository', useValue: ImagePart }];
