export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  GatsbyImageData: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  flags?: Maybe<SiteFlags>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  graphqlTypegen?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteFlags = {
  PRESERVE_WEBPACK_CACHE?: Maybe<Scalars['Boolean']>;
  FAST_DEV?: Maybe<Scalars['Boolean']>;
  DEV_SSR?: Maybe<Scalars['Boolean']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Kontent_Item = {
  id: Scalars['ID'];
  system: Kontent_Item_System;
  preferred_language: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Kontent_Item_System = {
  codename: Scalars['String'];
  id: Scalars['String'];
  language: Scalars['String'];
  last_modified: Scalars['Date'];
  name: Scalars['String'];
  type: Scalars['String'];
  collection?: Maybe<Scalars['String']>;
  workflow_step?: Maybe<Scalars['String']>;
};


export type Kontent_Item_SystemLast_ModifiedArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Kontent_Item_Text_Element_Value = {
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type Kontent_Item_Rich_Text_Element_Value = {
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  modular_content?: Maybe<Array<Maybe<Kontent_Item>>>;
  images?: Maybe<Array<Maybe<Kontent_Item_Rich_Text_Element_Image>>>;
  links?: Maybe<Array<Maybe<Kontent_Item_Rich_Text_Element_Link>>>;
};

export type Kontent_Item_Number_Element_Value = {
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['Float']>;
};

export type Kontent_Item_Multiple_Choice_Element_Value = {
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Array<Maybe<Kontent_Item_Multiple_Choice_Element>>>;
};

export type Kontent_Item_Date_Time_Element_Value = {
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['Date']>;
};


export type Kontent_Item_Date_Time_Element_ValueValueArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Kontent_Item_Asset_Element_Value = {
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Array<Maybe<Kontent_Item_Asset_Element>>>;
};

export type Kontent_Item_Modular_Content_Element_Value = {
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Array<Maybe<Kontent_Item>>>;
};

export type Kontent_Item_Custom_Element_Value = {
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type Kontent_Item_Taxonomy_Element_Value = {
  name: Scalars['String'];
  type: Scalars['String'];
  taxonomy_group: Scalars['String'];
  value?: Maybe<Array<Maybe<Kontent_Item_Taxonomy_Element>>>;
};

export type Kontent_Item_Url_Slug_Element_Value = {
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type Kontent_Item_Multiple_Choice_Element = {
  codename: Scalars['String'];
  name: Scalars['String'];
};

export type Kontent_Item_Asset_Element = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  size: Scalars['Int'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Kontent_Item_Taxonomy_Element = {
  name: Scalars['String'];
  codename: Scalars['String'];
};

export type Kontent_Item_Rich_Text_Element_Image = {
  image_id: Scalars['String'];
  url: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type Kontent_Item_Rich_Text_Element_Link = {
  link_id: Scalars['String'];
  codename: Scalars['String'];
  type: Scalars['String'];
  url_slug: Scalars['String'];
};

export type Kontent_Item_Diary_Product_Elements = {
  weight_freeform?: Maybe<Kontent_Item_Text_Element_Value>;
  produkt_core__producer?: Maybe<Kontent_Item_Taxonomy_Element_Value>;
  produkt_core__country?: Maybe<Kontent_Item_Taxonomy_Element_Value>;
  produkt_core__name?: Maybe<Kontent_Item_Text_Element_Value>;
  pieces_in_package?: Maybe<Kontent_Item_Number_Element_Value>;
  milk_type?: Maybe<Kontent_Item_Taxonomy_Element_Value>;
  diary_type?: Maybe<Kontent_Item_Taxonomy_Element_Value>;
  produkt_core__image?: Maybe<Kontent_Item_Asset_Element_Value>;
  produkt_core__description?: Maybe<Kontent_Item_Rich_Text_Element_Value>;
  weight?: Maybe<Kontent_Item_Number_Element_Value>;
  url_slug?: Maybe<Kontent_Item_Url_Slug_Element_Value>;
};

export type Kontent_Item_Diary_Product = Node & Kontent_Item & {
  system: Kontent_Item_System;
  elements?: Maybe<Kontent_Item_Diary_Product_Elements>;
  preferred_language: Scalars['String'];
  gatsbyPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type Kontent_Item_Diary_ProductGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']>;
};

export type Kontent_Item_Homepage_Elements = {
  subpages?: Maybe<Kontent_Item_Modular_Content_Element_Value>;
  content?: Maybe<Kontent_Item_Modular_Content_Element_Value>;
  title?: Maybe<Kontent_Item_Text_Element_Value>;
};

export type Kontent_Item_Homepage = Node & Kontent_Item & {
  system: Kontent_Item_System;
  elements?: Maybe<Kontent_Item_Homepage_Elements>;
  preferred_language: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Kontent_Item_Intro_Elements = {
  subtitle?: Maybe<Kontent_Item_Text_Element_Value>;
  cta?: Maybe<Kontent_Item_Text_Element_Value>;
  title?: Maybe<Kontent_Item_Text_Element_Value>;
  image?: Maybe<Kontent_Item_Asset_Element_Value>;
};

export type Kontent_Item_Intro = Node & Kontent_Item & {
  system: Kontent_Item_System;
  elements?: Maybe<Kontent_Item_Intro_Elements>;
  preferred_language: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Kontent_Item_Meat_Product_Elements = {
  url_slug?: Maybe<Kontent_Item_Url_Slug_Element_Value>;
  produkt_core__producer?: Maybe<Kontent_Item_Taxonomy_Element_Value>;
  produkt_core__country?: Maybe<Kontent_Item_Taxonomy_Element_Value>;
  produkt_core__name?: Maybe<Kontent_Item_Text_Element_Value>;
  produkt_core__image?: Maybe<Kontent_Item_Asset_Element_Value>;
  produkt_core__description?: Maybe<Kontent_Item_Rich_Text_Element_Value>;
};

export type Kontent_Item_Meat_Product = Node & Kontent_Item & {
  system: Kontent_Item_System;
  elements?: Maybe<Kontent_Item_Meat_Product_Elements>;
  preferred_language: Scalars['String'];
  gatsbyPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type Kontent_Item_Meat_ProductGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']>;
};

export type Kontent_Item_Other_Product_Elements = {
  produkt_core__producer?: Maybe<Kontent_Item_Taxonomy_Element_Value>;
  produkt_core__country?: Maybe<Kontent_Item_Taxonomy_Element_Value>;
  produkt_core__name?: Maybe<Kontent_Item_Text_Element_Value>;
  url_slug?: Maybe<Kontent_Item_Url_Slug_Element_Value>;
  produkt_core__image?: Maybe<Kontent_Item_Asset_Element_Value>;
  produkt_core__description?: Maybe<Kontent_Item_Rich_Text_Element_Value>;
};

export type Kontent_Item_Other_Product = Node & Kontent_Item & {
  system: Kontent_Item_System;
  elements?: Maybe<Kontent_Item_Other_Product_Elements>;
  preferred_language: Scalars['String'];
  gatsbyPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type Kontent_Item_Other_ProductGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']>;
};

export type Kontent_Item_Page_Elements = {
  url?: Maybe<Kontent_Item_Url_Slug_Element_Value>;
  subpages?: Maybe<Kontent_Item_Modular_Content_Element_Value>;
  content?: Maybe<Kontent_Item_Modular_Content_Element_Value>;
  show_in_navigation?: Maybe<Kontent_Item_Multiple_Choice_Element_Value>;
  title?: Maybe<Kontent_Item_Text_Element_Value>;
};

export type Kontent_Item_Page = Node & Kontent_Item & {
  system: Kontent_Item_System;
  elements?: Maybe<Kontent_Item_Page_Elements>;
  preferred_language: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Kontent_Item_Partner_Elements = {
  logo?: Maybe<Kontent_Item_Asset_Element_Value>;
  title?: Maybe<Kontent_Item_Text_Element_Value>;
  link?: Maybe<Kontent_Item_Text_Element_Value>;
};

export type Kontent_Item_Partner = Node & Kontent_Item & {
  system: Kontent_Item_System;
  elements?: Maybe<Kontent_Item_Partner_Elements>;
  preferred_language: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Kontent_Item_Partneri_Elements = {
  partners?: Maybe<Kontent_Item_Modular_Content_Element_Value>;
};

export type Kontent_Item_Partneri = Node & Kontent_Item & {
  system: Kontent_Item_System;
  elements?: Maybe<Kontent_Item_Partneri_Elements>;
  preferred_language: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Kontent_Item_Product_Type_Elements = {
  type?: Maybe<Kontent_Item_Multiple_Choice_Element_Value>;
  image?: Maybe<Kontent_Item_Asset_Element_Value>;
};

export type Kontent_Item_Product_Type = Node & Kontent_Item & {
  system: Kontent_Item_System;
  elements?: Maybe<Kontent_Item_Product_Type_Elements>;
  preferred_language: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Kontent_Item_Products_Disambiguation_Elements = {
  product_types?: Maybe<Kontent_Item_Modular_Content_Element_Value>;
};

export type Kontent_Item_Products_Disambiguation = Node & Kontent_Item & {
  system: Kontent_Item_System;
  elements?: Maybe<Kontent_Item_Products_Disambiguation_Elements>;
  preferred_language: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Kontent_Taxonomy = Node & {
  id: Scalars['ID'];
  system: Kontent_Taxonomy_System;
  terms?: Maybe<Array<Maybe<Kontent_Taxonomy_Term>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Kontent_Taxonomy_System = {
  codename: Scalars['String'];
  id: Scalars['String'];
  last_modified: Scalars['Date'];
  name: Scalars['String'];
};


export type Kontent_Taxonomy_SystemLast_ModifiedArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Kontent_Taxonomy_Term = {
  codename?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  terms?: Maybe<Array<Maybe<Kontent_Taxonomy_Term>>>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  kontentItem?: Maybe<Kontent_Item>;
  allKontentItem: Kontent_ItemConnection;
  kontentItemDiaryProduct?: Maybe<Kontent_Item_Diary_Product>;
  allKontentItemDiaryProduct: Kontent_Item_Diary_ProductConnection;
  kontentItemHomepage?: Maybe<Kontent_Item_Homepage>;
  allKontentItemHomepage: Kontent_Item_HomepageConnection;
  kontentItemIntro?: Maybe<Kontent_Item_Intro>;
  allKontentItemIntro: Kontent_Item_IntroConnection;
  kontentItemMeatProduct?: Maybe<Kontent_Item_Meat_Product>;
  allKontentItemMeatProduct: Kontent_Item_Meat_ProductConnection;
  kontentItemOtherProduct?: Maybe<Kontent_Item_Other_Product>;
  allKontentItemOtherProduct: Kontent_Item_Other_ProductConnection;
  kontentItemPage?: Maybe<Kontent_Item_Page>;
  allKontentItemPage: Kontent_Item_PageConnection;
  kontentItemPartner?: Maybe<Kontent_Item_Partner>;
  allKontentItemPartner: Kontent_Item_PartnerConnection;
  kontentItemPartneri?: Maybe<Kontent_Item_Partneri>;
  allKontentItemPartneri: Kontent_Item_PartneriConnection;
  kontentItemProductType?: Maybe<Kontent_Item_Product_Type>;
  allKontentItemProductType: Kontent_Item_Product_TypeConnection;
  kontentItemProductsDisambiguation?: Maybe<Kontent_Item_Products_Disambiguation>;
  allKontentItemProductsDisambiguation: Kontent_Item_Products_DisambiguationConnection;
  kontentTaxonomy?: Maybe<Kontent_Taxonomy>;
  allKontentTaxonomy: Kontent_TaxonomyConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  flags?: InputMaybe<SiteFlagsFilterInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryKontentItemArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllKontentItemArgs = {
  filter?: InputMaybe<Kontent_ItemFilterInput>;
  sort?: InputMaybe<Kontent_ItemSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryKontentItemDiaryProductArgs = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Diary_Product_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllKontentItemDiaryProductArgs = {
  filter?: InputMaybe<Kontent_Item_Diary_ProductFilterInput>;
  sort?: InputMaybe<Kontent_Item_Diary_ProductSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryKontentItemHomepageArgs = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Homepage_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllKontentItemHomepageArgs = {
  filter?: InputMaybe<Kontent_Item_HomepageFilterInput>;
  sort?: InputMaybe<Kontent_Item_HomepageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryKontentItemIntroArgs = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Intro_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllKontentItemIntroArgs = {
  filter?: InputMaybe<Kontent_Item_IntroFilterInput>;
  sort?: InputMaybe<Kontent_Item_IntroSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryKontentItemMeatProductArgs = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Meat_Product_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllKontentItemMeatProductArgs = {
  filter?: InputMaybe<Kontent_Item_Meat_ProductFilterInput>;
  sort?: InputMaybe<Kontent_Item_Meat_ProductSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryKontentItemOtherProductArgs = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Other_Product_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllKontentItemOtherProductArgs = {
  filter?: InputMaybe<Kontent_Item_Other_ProductFilterInput>;
  sort?: InputMaybe<Kontent_Item_Other_ProductSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryKontentItemPageArgs = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Page_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllKontentItemPageArgs = {
  filter?: InputMaybe<Kontent_Item_PageFilterInput>;
  sort?: InputMaybe<Kontent_Item_PageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryKontentItemPartnerArgs = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Partner_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllKontentItemPartnerArgs = {
  filter?: InputMaybe<Kontent_Item_PartnerFilterInput>;
  sort?: InputMaybe<Kontent_Item_PartnerSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryKontentItemPartneriArgs = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Partneri_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllKontentItemPartneriArgs = {
  filter?: InputMaybe<Kontent_Item_PartneriFilterInput>;
  sort?: InputMaybe<Kontent_Item_PartneriSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryKontentItemProductTypeArgs = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Product_Type_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllKontentItemProductTypeArgs = {
  filter?: InputMaybe<Kontent_Item_Product_TypeFilterInput>;
  sort?: InputMaybe<Kontent_Item_Product_TypeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryKontentItemProductsDisambiguationArgs = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Products_Disambiguation_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllKontentItemProductsDisambiguationArgs = {
  filter?: InputMaybe<Kontent_Item_Products_DisambiguationFilterInput>;
  sort?: InputMaybe<Kontent_Item_Products_DisambiguationSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryKontentTaxonomyArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  system?: InputMaybe<Kontent_Taxonomy_SystemFilterInput>;
  terms?: InputMaybe<Kontent_Taxonomy_TermFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllKontentTaxonomyArgs = {
  filter?: InputMaybe<Kontent_TaxonomyFilterInput>;
  sort?: InputMaybe<Kontent_TaxonomySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFlagsFilterInput = {
  PRESERVE_WEBPACK_CACHE?: InputMaybe<BooleanQueryOperatorInput>;
  FAST_DEV?: InputMaybe<BooleanQueryOperatorInput>;
  DEV_SSR?: InputMaybe<BooleanQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'port'
  | 'host'
  | 'flags___PRESERVE_WEBPACK_CACHE'
  | 'flags___FAST_DEV'
  | 'flags___DEV_SSR'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'graphqlTypegen'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  flags?: InputMaybe<SiteFlagsFilterInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Kontent_Item_SystemFilterInput = {
  codename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  language?: InputMaybe<StringQueryOperatorInput>;
  last_modified?: InputMaybe<DateQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  collection?: InputMaybe<StringQueryOperatorInput>;
  workflow_step?: InputMaybe<StringQueryOperatorInput>;
};

export type Kontent_ItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_ItemEdge>;
  nodes: Array<Kontent_Item>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_ItemGroupConnection>;
};


export type Kontent_ItemConnectionDistinctArgs = {
  field: Kontent_ItemFieldsEnum;
};


export type Kontent_ItemConnectionMaxArgs = {
  field: Kontent_ItemFieldsEnum;
};


export type Kontent_ItemConnectionMinArgs = {
  field: Kontent_ItemFieldsEnum;
};


export type Kontent_ItemConnectionSumArgs = {
  field: Kontent_ItemFieldsEnum;
};


export type Kontent_ItemConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_ItemFieldsEnum;
};

export type Kontent_ItemEdge = {
  next?: Maybe<Kontent_Item>;
  node: Kontent_Item;
  previous?: Maybe<Kontent_Item>;
};

export type Kontent_ItemFieldsEnum =
  | 'id'
  | 'system___codename'
  | 'system___id'
  | 'system___language'
  | 'system___last_modified'
  | 'system___name'
  | 'system___type'
  | 'system___collection'
  | 'system___workflow_step'
  | 'preferred_language'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Kontent_ItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_ItemEdge>;
  nodes: Array<Kontent_Item>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_ItemGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Kontent_ItemGroupConnectionDistinctArgs = {
  field: Kontent_ItemFieldsEnum;
};


export type Kontent_ItemGroupConnectionMaxArgs = {
  field: Kontent_ItemFieldsEnum;
};


export type Kontent_ItemGroupConnectionMinArgs = {
  field: Kontent_ItemFieldsEnum;
};


export type Kontent_ItemGroupConnectionSumArgs = {
  field: Kontent_ItemFieldsEnum;
};


export type Kontent_ItemGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_ItemFieldsEnum;
};

export type Kontent_ItemFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type Kontent_ItemSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Kontent_ItemFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Kontent_Item_Diary_Product_ElementsFilterInput = {
  weight_freeform?: InputMaybe<Kontent_Item_Text_Element_ValueFilterInput>;
  produkt_core__producer?: InputMaybe<Kontent_Item_Taxonomy_Element_ValueFilterInput>;
  produkt_core__country?: InputMaybe<Kontent_Item_Taxonomy_Element_ValueFilterInput>;
  produkt_core__name?: InputMaybe<Kontent_Item_Text_Element_ValueFilterInput>;
  pieces_in_package?: InputMaybe<Kontent_Item_Number_Element_ValueFilterInput>;
  milk_type?: InputMaybe<Kontent_Item_Taxonomy_Element_ValueFilterInput>;
  diary_type?: InputMaybe<Kontent_Item_Taxonomy_Element_ValueFilterInput>;
  produkt_core__image?: InputMaybe<Kontent_Item_Asset_Element_ValueFilterInput>;
  produkt_core__description?: InputMaybe<Kontent_Item_Rich_Text_Element_ValueFilterInput>;
  weight?: InputMaybe<Kontent_Item_Number_Element_ValueFilterInput>;
  url_slug?: InputMaybe<Kontent_Item_Url_Slug_Element_ValueFilterInput>;
};

export type Kontent_Item_Text_Element_ValueFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type Kontent_Item_Taxonomy_Element_ValueFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  taxonomy_group?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<Kontent_Item_Taxonomy_ElementFilterListInput>;
};

export type Kontent_Item_Taxonomy_ElementFilterListInput = {
  elemMatch?: InputMaybe<Kontent_Item_Taxonomy_ElementFilterInput>;
};

export type Kontent_Item_Taxonomy_ElementFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  codename?: InputMaybe<StringQueryOperatorInput>;
};

export type Kontent_Item_Number_Element_ValueFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<FloatQueryOperatorInput>;
};

export type Kontent_Item_Asset_Element_ValueFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<Kontent_Item_Asset_ElementFilterListInput>;
};

export type Kontent_Item_Asset_ElementFilterListInput = {
  elemMatch?: InputMaybe<Kontent_Item_Asset_ElementFilterInput>;
};

export type Kontent_Item_Asset_ElementFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type Kontent_Item_Rich_Text_Element_ValueFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  modular_content?: InputMaybe<Kontent_ItemFilterListInput>;
  images?: InputMaybe<Kontent_Item_Rich_Text_Element_ImageFilterListInput>;
  links?: InputMaybe<Kontent_Item_Rich_Text_Element_LinkFilterListInput>;
};

export type Kontent_ItemFilterListInput = {
  elemMatch?: InputMaybe<Kontent_ItemFilterInput>;
};

export type Kontent_Item_Rich_Text_Element_ImageFilterListInput = {
  elemMatch?: InputMaybe<Kontent_Item_Rich_Text_Element_ImageFilterInput>;
};

export type Kontent_Item_Rich_Text_Element_ImageFilterInput = {
  image_id?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type Kontent_Item_Rich_Text_Element_LinkFilterListInput = {
  elemMatch?: InputMaybe<Kontent_Item_Rich_Text_Element_LinkFilterInput>;
};

export type Kontent_Item_Rich_Text_Element_LinkFilterInput = {
  link_id?: InputMaybe<StringQueryOperatorInput>;
  codename?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url_slug?: InputMaybe<StringQueryOperatorInput>;
};

export type Kontent_Item_Url_Slug_Element_ValueFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type Kontent_Item_Diary_ProductConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_Diary_ProductEdge>;
  nodes: Array<Kontent_Item_Diary_Product>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_Diary_ProductGroupConnection>;
};


export type Kontent_Item_Diary_ProductConnectionDistinctArgs = {
  field: Kontent_Item_Diary_ProductFieldsEnum;
};


export type Kontent_Item_Diary_ProductConnectionMaxArgs = {
  field: Kontent_Item_Diary_ProductFieldsEnum;
};


export type Kontent_Item_Diary_ProductConnectionMinArgs = {
  field: Kontent_Item_Diary_ProductFieldsEnum;
};


export type Kontent_Item_Diary_ProductConnectionSumArgs = {
  field: Kontent_Item_Diary_ProductFieldsEnum;
};


export type Kontent_Item_Diary_ProductConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_Diary_ProductFieldsEnum;
};

export type Kontent_Item_Diary_ProductEdge = {
  next?: Maybe<Kontent_Item_Diary_Product>;
  node: Kontent_Item_Diary_Product;
  previous?: Maybe<Kontent_Item_Diary_Product>;
};

export type Kontent_Item_Diary_ProductFieldsEnum =
  | 'system___codename'
  | 'system___id'
  | 'system___language'
  | 'system___last_modified'
  | 'system___name'
  | 'system___type'
  | 'system___collection'
  | 'system___workflow_step'
  | 'elements___weight_freeform___name'
  | 'elements___weight_freeform___type'
  | 'elements___weight_freeform___value'
  | 'elements___produkt_core__producer___name'
  | 'elements___produkt_core__producer___type'
  | 'elements___produkt_core__producer___taxonomy_group'
  | 'elements___produkt_core__producer___value'
  | 'elements___produkt_core__producer___value___name'
  | 'elements___produkt_core__producer___value___codename'
  | 'elements___produkt_core__country___name'
  | 'elements___produkt_core__country___type'
  | 'elements___produkt_core__country___taxonomy_group'
  | 'elements___produkt_core__country___value'
  | 'elements___produkt_core__country___value___name'
  | 'elements___produkt_core__country___value___codename'
  | 'elements___produkt_core__name___name'
  | 'elements___produkt_core__name___type'
  | 'elements___produkt_core__name___value'
  | 'elements___pieces_in_package___name'
  | 'elements___pieces_in_package___type'
  | 'elements___pieces_in_package___value'
  | 'elements___milk_type___name'
  | 'elements___milk_type___type'
  | 'elements___milk_type___taxonomy_group'
  | 'elements___milk_type___value'
  | 'elements___milk_type___value___name'
  | 'elements___milk_type___value___codename'
  | 'elements___diary_type___name'
  | 'elements___diary_type___type'
  | 'elements___diary_type___taxonomy_group'
  | 'elements___diary_type___value'
  | 'elements___diary_type___value___name'
  | 'elements___diary_type___value___codename'
  | 'elements___produkt_core__image___name'
  | 'elements___produkt_core__image___type'
  | 'elements___produkt_core__image___value'
  | 'elements___produkt_core__image___value___name'
  | 'elements___produkt_core__image___value___description'
  | 'elements___produkt_core__image___value___type'
  | 'elements___produkt_core__image___value___size'
  | 'elements___produkt_core__image___value___url'
  | 'elements___produkt_core__image___value___width'
  | 'elements___produkt_core__image___value___height'
  | 'elements___produkt_core__description___name'
  | 'elements___produkt_core__description___type'
  | 'elements___produkt_core__description___value'
  | 'elements___produkt_core__description___modular_content'
  | 'elements___produkt_core__description___modular_content___id'
  | 'elements___produkt_core__description___modular_content___preferred_language'
  | 'elements___produkt_core__description___modular_content___children'
  | 'elements___produkt_core__description___images'
  | 'elements___produkt_core__description___images___image_id'
  | 'elements___produkt_core__description___images___url'
  | 'elements___produkt_core__description___images___description'
  | 'elements___produkt_core__description___images___height'
  | 'elements___produkt_core__description___images___width'
  | 'elements___produkt_core__description___links'
  | 'elements___produkt_core__description___links___link_id'
  | 'elements___produkt_core__description___links___codename'
  | 'elements___produkt_core__description___links___type'
  | 'elements___produkt_core__description___links___url_slug'
  | 'elements___weight___name'
  | 'elements___weight___type'
  | 'elements___weight___value'
  | 'elements___url_slug___name'
  | 'elements___url_slug___type'
  | 'elements___url_slug___value'
  | 'preferred_language'
  | 'gatsbyPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Kontent_Item_Diary_ProductGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_Diary_ProductEdge>;
  nodes: Array<Kontent_Item_Diary_Product>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_Diary_ProductGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Kontent_Item_Diary_ProductGroupConnectionDistinctArgs = {
  field: Kontent_Item_Diary_ProductFieldsEnum;
};


export type Kontent_Item_Diary_ProductGroupConnectionMaxArgs = {
  field: Kontent_Item_Diary_ProductFieldsEnum;
};


export type Kontent_Item_Diary_ProductGroupConnectionMinArgs = {
  field: Kontent_Item_Diary_ProductFieldsEnum;
};


export type Kontent_Item_Diary_ProductGroupConnectionSumArgs = {
  field: Kontent_Item_Diary_ProductFieldsEnum;
};


export type Kontent_Item_Diary_ProductGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_Diary_ProductFieldsEnum;
};

export type Kontent_Item_Diary_ProductFilterInput = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Diary_Product_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type Kontent_Item_Diary_ProductSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Kontent_Item_Diary_ProductFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Kontent_Item_Homepage_ElementsFilterInput = {
  subpages?: InputMaybe<Kontent_Item_Modular_Content_Element_ValueFilterInput>;
  content?: InputMaybe<Kontent_Item_Modular_Content_Element_ValueFilterInput>;
  title?: InputMaybe<Kontent_Item_Text_Element_ValueFilterInput>;
};

export type Kontent_Item_Modular_Content_Element_ValueFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<Kontent_ItemFilterListInput>;
};

export type Kontent_Item_HomepageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_HomepageEdge>;
  nodes: Array<Kontent_Item_Homepage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_HomepageGroupConnection>;
};


export type Kontent_Item_HomepageConnectionDistinctArgs = {
  field: Kontent_Item_HomepageFieldsEnum;
};


export type Kontent_Item_HomepageConnectionMaxArgs = {
  field: Kontent_Item_HomepageFieldsEnum;
};


export type Kontent_Item_HomepageConnectionMinArgs = {
  field: Kontent_Item_HomepageFieldsEnum;
};


export type Kontent_Item_HomepageConnectionSumArgs = {
  field: Kontent_Item_HomepageFieldsEnum;
};


export type Kontent_Item_HomepageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_HomepageFieldsEnum;
};

export type Kontent_Item_HomepageEdge = {
  next?: Maybe<Kontent_Item_Homepage>;
  node: Kontent_Item_Homepage;
  previous?: Maybe<Kontent_Item_Homepage>;
};

export type Kontent_Item_HomepageFieldsEnum =
  | 'system___codename'
  | 'system___id'
  | 'system___language'
  | 'system___last_modified'
  | 'system___name'
  | 'system___type'
  | 'system___collection'
  | 'system___workflow_step'
  | 'elements___subpages___name'
  | 'elements___subpages___type'
  | 'elements___subpages___value'
  | 'elements___subpages___value___id'
  | 'elements___subpages___value___preferred_language'
  | 'elements___subpages___value___children'
  | 'elements___content___name'
  | 'elements___content___type'
  | 'elements___content___value'
  | 'elements___content___value___id'
  | 'elements___content___value___preferred_language'
  | 'elements___content___value___children'
  | 'elements___title___name'
  | 'elements___title___type'
  | 'elements___title___value'
  | 'preferred_language'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Kontent_Item_HomepageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_HomepageEdge>;
  nodes: Array<Kontent_Item_Homepage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_HomepageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Kontent_Item_HomepageGroupConnectionDistinctArgs = {
  field: Kontent_Item_HomepageFieldsEnum;
};


export type Kontent_Item_HomepageGroupConnectionMaxArgs = {
  field: Kontent_Item_HomepageFieldsEnum;
};


export type Kontent_Item_HomepageGroupConnectionMinArgs = {
  field: Kontent_Item_HomepageFieldsEnum;
};


export type Kontent_Item_HomepageGroupConnectionSumArgs = {
  field: Kontent_Item_HomepageFieldsEnum;
};


export type Kontent_Item_HomepageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_HomepageFieldsEnum;
};

export type Kontent_Item_HomepageFilterInput = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Homepage_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type Kontent_Item_HomepageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Kontent_Item_HomepageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Kontent_Item_Intro_ElementsFilterInput = {
  subtitle?: InputMaybe<Kontent_Item_Text_Element_ValueFilterInput>;
  cta?: InputMaybe<Kontent_Item_Text_Element_ValueFilterInput>;
  title?: InputMaybe<Kontent_Item_Text_Element_ValueFilterInput>;
  image?: InputMaybe<Kontent_Item_Asset_Element_ValueFilterInput>;
};

export type Kontent_Item_IntroConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_IntroEdge>;
  nodes: Array<Kontent_Item_Intro>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_IntroGroupConnection>;
};


export type Kontent_Item_IntroConnectionDistinctArgs = {
  field: Kontent_Item_IntroFieldsEnum;
};


export type Kontent_Item_IntroConnectionMaxArgs = {
  field: Kontent_Item_IntroFieldsEnum;
};


export type Kontent_Item_IntroConnectionMinArgs = {
  field: Kontent_Item_IntroFieldsEnum;
};


export type Kontent_Item_IntroConnectionSumArgs = {
  field: Kontent_Item_IntroFieldsEnum;
};


export type Kontent_Item_IntroConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_IntroFieldsEnum;
};

export type Kontent_Item_IntroEdge = {
  next?: Maybe<Kontent_Item_Intro>;
  node: Kontent_Item_Intro;
  previous?: Maybe<Kontent_Item_Intro>;
};

export type Kontent_Item_IntroFieldsEnum =
  | 'system___codename'
  | 'system___id'
  | 'system___language'
  | 'system___last_modified'
  | 'system___name'
  | 'system___type'
  | 'system___collection'
  | 'system___workflow_step'
  | 'elements___subtitle___name'
  | 'elements___subtitle___type'
  | 'elements___subtitle___value'
  | 'elements___cta___name'
  | 'elements___cta___type'
  | 'elements___cta___value'
  | 'elements___title___name'
  | 'elements___title___type'
  | 'elements___title___value'
  | 'elements___image___name'
  | 'elements___image___type'
  | 'elements___image___value'
  | 'elements___image___value___name'
  | 'elements___image___value___description'
  | 'elements___image___value___type'
  | 'elements___image___value___size'
  | 'elements___image___value___url'
  | 'elements___image___value___width'
  | 'elements___image___value___height'
  | 'preferred_language'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Kontent_Item_IntroGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_IntroEdge>;
  nodes: Array<Kontent_Item_Intro>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_IntroGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Kontent_Item_IntroGroupConnectionDistinctArgs = {
  field: Kontent_Item_IntroFieldsEnum;
};


export type Kontent_Item_IntroGroupConnectionMaxArgs = {
  field: Kontent_Item_IntroFieldsEnum;
};


export type Kontent_Item_IntroGroupConnectionMinArgs = {
  field: Kontent_Item_IntroFieldsEnum;
};


export type Kontent_Item_IntroGroupConnectionSumArgs = {
  field: Kontent_Item_IntroFieldsEnum;
};


export type Kontent_Item_IntroGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_IntroFieldsEnum;
};

export type Kontent_Item_IntroFilterInput = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Intro_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type Kontent_Item_IntroSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Kontent_Item_IntroFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Kontent_Item_Meat_Product_ElementsFilterInput = {
  url_slug?: InputMaybe<Kontent_Item_Url_Slug_Element_ValueFilterInput>;
  produkt_core__producer?: InputMaybe<Kontent_Item_Taxonomy_Element_ValueFilterInput>;
  produkt_core__country?: InputMaybe<Kontent_Item_Taxonomy_Element_ValueFilterInput>;
  produkt_core__name?: InputMaybe<Kontent_Item_Text_Element_ValueFilterInput>;
  produkt_core__image?: InputMaybe<Kontent_Item_Asset_Element_ValueFilterInput>;
  produkt_core__description?: InputMaybe<Kontent_Item_Rich_Text_Element_ValueFilterInput>;
};

export type Kontent_Item_Meat_ProductConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_Meat_ProductEdge>;
  nodes: Array<Kontent_Item_Meat_Product>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_Meat_ProductGroupConnection>;
};


export type Kontent_Item_Meat_ProductConnectionDistinctArgs = {
  field: Kontent_Item_Meat_ProductFieldsEnum;
};


export type Kontent_Item_Meat_ProductConnectionMaxArgs = {
  field: Kontent_Item_Meat_ProductFieldsEnum;
};


export type Kontent_Item_Meat_ProductConnectionMinArgs = {
  field: Kontent_Item_Meat_ProductFieldsEnum;
};


export type Kontent_Item_Meat_ProductConnectionSumArgs = {
  field: Kontent_Item_Meat_ProductFieldsEnum;
};


export type Kontent_Item_Meat_ProductConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_Meat_ProductFieldsEnum;
};

export type Kontent_Item_Meat_ProductEdge = {
  next?: Maybe<Kontent_Item_Meat_Product>;
  node: Kontent_Item_Meat_Product;
  previous?: Maybe<Kontent_Item_Meat_Product>;
};

export type Kontent_Item_Meat_ProductFieldsEnum =
  | 'system___codename'
  | 'system___id'
  | 'system___language'
  | 'system___last_modified'
  | 'system___name'
  | 'system___type'
  | 'system___collection'
  | 'system___workflow_step'
  | 'elements___url_slug___name'
  | 'elements___url_slug___type'
  | 'elements___url_slug___value'
  | 'elements___produkt_core__producer___name'
  | 'elements___produkt_core__producer___type'
  | 'elements___produkt_core__producer___taxonomy_group'
  | 'elements___produkt_core__producer___value'
  | 'elements___produkt_core__producer___value___name'
  | 'elements___produkt_core__producer___value___codename'
  | 'elements___produkt_core__country___name'
  | 'elements___produkt_core__country___type'
  | 'elements___produkt_core__country___taxonomy_group'
  | 'elements___produkt_core__country___value'
  | 'elements___produkt_core__country___value___name'
  | 'elements___produkt_core__country___value___codename'
  | 'elements___produkt_core__name___name'
  | 'elements___produkt_core__name___type'
  | 'elements___produkt_core__name___value'
  | 'elements___produkt_core__image___name'
  | 'elements___produkt_core__image___type'
  | 'elements___produkt_core__image___value'
  | 'elements___produkt_core__image___value___name'
  | 'elements___produkt_core__image___value___description'
  | 'elements___produkt_core__image___value___type'
  | 'elements___produkt_core__image___value___size'
  | 'elements___produkt_core__image___value___url'
  | 'elements___produkt_core__image___value___width'
  | 'elements___produkt_core__image___value___height'
  | 'elements___produkt_core__description___name'
  | 'elements___produkt_core__description___type'
  | 'elements___produkt_core__description___value'
  | 'elements___produkt_core__description___modular_content'
  | 'elements___produkt_core__description___modular_content___id'
  | 'elements___produkt_core__description___modular_content___preferred_language'
  | 'elements___produkt_core__description___modular_content___children'
  | 'elements___produkt_core__description___images'
  | 'elements___produkt_core__description___images___image_id'
  | 'elements___produkt_core__description___images___url'
  | 'elements___produkt_core__description___images___description'
  | 'elements___produkt_core__description___images___height'
  | 'elements___produkt_core__description___images___width'
  | 'elements___produkt_core__description___links'
  | 'elements___produkt_core__description___links___link_id'
  | 'elements___produkt_core__description___links___codename'
  | 'elements___produkt_core__description___links___type'
  | 'elements___produkt_core__description___links___url_slug'
  | 'preferred_language'
  | 'gatsbyPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Kontent_Item_Meat_ProductGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_Meat_ProductEdge>;
  nodes: Array<Kontent_Item_Meat_Product>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_Meat_ProductGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Kontent_Item_Meat_ProductGroupConnectionDistinctArgs = {
  field: Kontent_Item_Meat_ProductFieldsEnum;
};


export type Kontent_Item_Meat_ProductGroupConnectionMaxArgs = {
  field: Kontent_Item_Meat_ProductFieldsEnum;
};


export type Kontent_Item_Meat_ProductGroupConnectionMinArgs = {
  field: Kontent_Item_Meat_ProductFieldsEnum;
};


export type Kontent_Item_Meat_ProductGroupConnectionSumArgs = {
  field: Kontent_Item_Meat_ProductFieldsEnum;
};


export type Kontent_Item_Meat_ProductGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_Meat_ProductFieldsEnum;
};

export type Kontent_Item_Meat_ProductFilterInput = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Meat_Product_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type Kontent_Item_Meat_ProductSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Kontent_Item_Meat_ProductFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Kontent_Item_Other_Product_ElementsFilterInput = {
  produkt_core__producer?: InputMaybe<Kontent_Item_Taxonomy_Element_ValueFilterInput>;
  produkt_core__country?: InputMaybe<Kontent_Item_Taxonomy_Element_ValueFilterInput>;
  produkt_core__name?: InputMaybe<Kontent_Item_Text_Element_ValueFilterInput>;
  url_slug?: InputMaybe<Kontent_Item_Url_Slug_Element_ValueFilterInput>;
  produkt_core__image?: InputMaybe<Kontent_Item_Asset_Element_ValueFilterInput>;
  produkt_core__description?: InputMaybe<Kontent_Item_Rich_Text_Element_ValueFilterInput>;
};

export type Kontent_Item_Other_ProductConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_Other_ProductEdge>;
  nodes: Array<Kontent_Item_Other_Product>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_Other_ProductGroupConnection>;
};


export type Kontent_Item_Other_ProductConnectionDistinctArgs = {
  field: Kontent_Item_Other_ProductFieldsEnum;
};


export type Kontent_Item_Other_ProductConnectionMaxArgs = {
  field: Kontent_Item_Other_ProductFieldsEnum;
};


export type Kontent_Item_Other_ProductConnectionMinArgs = {
  field: Kontent_Item_Other_ProductFieldsEnum;
};


export type Kontent_Item_Other_ProductConnectionSumArgs = {
  field: Kontent_Item_Other_ProductFieldsEnum;
};


export type Kontent_Item_Other_ProductConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_Other_ProductFieldsEnum;
};

export type Kontent_Item_Other_ProductEdge = {
  next?: Maybe<Kontent_Item_Other_Product>;
  node: Kontent_Item_Other_Product;
  previous?: Maybe<Kontent_Item_Other_Product>;
};

export type Kontent_Item_Other_ProductFieldsEnum =
  | 'system___codename'
  | 'system___id'
  | 'system___language'
  | 'system___last_modified'
  | 'system___name'
  | 'system___type'
  | 'system___collection'
  | 'system___workflow_step'
  | 'elements___produkt_core__producer___name'
  | 'elements___produkt_core__producer___type'
  | 'elements___produkt_core__producer___taxonomy_group'
  | 'elements___produkt_core__producer___value'
  | 'elements___produkt_core__producer___value___name'
  | 'elements___produkt_core__producer___value___codename'
  | 'elements___produkt_core__country___name'
  | 'elements___produkt_core__country___type'
  | 'elements___produkt_core__country___taxonomy_group'
  | 'elements___produkt_core__country___value'
  | 'elements___produkt_core__country___value___name'
  | 'elements___produkt_core__country___value___codename'
  | 'elements___produkt_core__name___name'
  | 'elements___produkt_core__name___type'
  | 'elements___produkt_core__name___value'
  | 'elements___url_slug___name'
  | 'elements___url_slug___type'
  | 'elements___url_slug___value'
  | 'elements___produkt_core__image___name'
  | 'elements___produkt_core__image___type'
  | 'elements___produkt_core__image___value'
  | 'elements___produkt_core__image___value___name'
  | 'elements___produkt_core__image___value___description'
  | 'elements___produkt_core__image___value___type'
  | 'elements___produkt_core__image___value___size'
  | 'elements___produkt_core__image___value___url'
  | 'elements___produkt_core__image___value___width'
  | 'elements___produkt_core__image___value___height'
  | 'elements___produkt_core__description___name'
  | 'elements___produkt_core__description___type'
  | 'elements___produkt_core__description___value'
  | 'elements___produkt_core__description___modular_content'
  | 'elements___produkt_core__description___modular_content___id'
  | 'elements___produkt_core__description___modular_content___preferred_language'
  | 'elements___produkt_core__description___modular_content___children'
  | 'elements___produkt_core__description___images'
  | 'elements___produkt_core__description___images___image_id'
  | 'elements___produkt_core__description___images___url'
  | 'elements___produkt_core__description___images___description'
  | 'elements___produkt_core__description___images___height'
  | 'elements___produkt_core__description___images___width'
  | 'elements___produkt_core__description___links'
  | 'elements___produkt_core__description___links___link_id'
  | 'elements___produkt_core__description___links___codename'
  | 'elements___produkt_core__description___links___type'
  | 'elements___produkt_core__description___links___url_slug'
  | 'preferred_language'
  | 'gatsbyPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Kontent_Item_Other_ProductGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_Other_ProductEdge>;
  nodes: Array<Kontent_Item_Other_Product>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_Other_ProductGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Kontent_Item_Other_ProductGroupConnectionDistinctArgs = {
  field: Kontent_Item_Other_ProductFieldsEnum;
};


export type Kontent_Item_Other_ProductGroupConnectionMaxArgs = {
  field: Kontent_Item_Other_ProductFieldsEnum;
};


export type Kontent_Item_Other_ProductGroupConnectionMinArgs = {
  field: Kontent_Item_Other_ProductFieldsEnum;
};


export type Kontent_Item_Other_ProductGroupConnectionSumArgs = {
  field: Kontent_Item_Other_ProductFieldsEnum;
};


export type Kontent_Item_Other_ProductGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_Other_ProductFieldsEnum;
};

export type Kontent_Item_Other_ProductFilterInput = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Other_Product_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type Kontent_Item_Other_ProductSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Kontent_Item_Other_ProductFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Kontent_Item_Page_ElementsFilterInput = {
  url?: InputMaybe<Kontent_Item_Url_Slug_Element_ValueFilterInput>;
  subpages?: InputMaybe<Kontent_Item_Modular_Content_Element_ValueFilterInput>;
  content?: InputMaybe<Kontent_Item_Modular_Content_Element_ValueFilterInput>;
  show_in_navigation?: InputMaybe<Kontent_Item_Multiple_Choice_Element_ValueFilterInput>;
  title?: InputMaybe<Kontent_Item_Text_Element_ValueFilterInput>;
};

export type Kontent_Item_Multiple_Choice_Element_ValueFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<Kontent_Item_Multiple_Choice_ElementFilterListInput>;
};

export type Kontent_Item_Multiple_Choice_ElementFilterListInput = {
  elemMatch?: InputMaybe<Kontent_Item_Multiple_Choice_ElementFilterInput>;
};

export type Kontent_Item_Multiple_Choice_ElementFilterInput = {
  codename?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type Kontent_Item_PageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_PageEdge>;
  nodes: Array<Kontent_Item_Page>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_PageGroupConnection>;
};


export type Kontent_Item_PageConnectionDistinctArgs = {
  field: Kontent_Item_PageFieldsEnum;
};


export type Kontent_Item_PageConnectionMaxArgs = {
  field: Kontent_Item_PageFieldsEnum;
};


export type Kontent_Item_PageConnectionMinArgs = {
  field: Kontent_Item_PageFieldsEnum;
};


export type Kontent_Item_PageConnectionSumArgs = {
  field: Kontent_Item_PageFieldsEnum;
};


export type Kontent_Item_PageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_PageFieldsEnum;
};

export type Kontent_Item_PageEdge = {
  next?: Maybe<Kontent_Item_Page>;
  node: Kontent_Item_Page;
  previous?: Maybe<Kontent_Item_Page>;
};

export type Kontent_Item_PageFieldsEnum =
  | 'system___codename'
  | 'system___id'
  | 'system___language'
  | 'system___last_modified'
  | 'system___name'
  | 'system___type'
  | 'system___collection'
  | 'system___workflow_step'
  | 'elements___url___name'
  | 'elements___url___type'
  | 'elements___url___value'
  | 'elements___subpages___name'
  | 'elements___subpages___type'
  | 'elements___subpages___value'
  | 'elements___subpages___value___id'
  | 'elements___subpages___value___preferred_language'
  | 'elements___subpages___value___children'
  | 'elements___content___name'
  | 'elements___content___type'
  | 'elements___content___value'
  | 'elements___content___value___id'
  | 'elements___content___value___preferred_language'
  | 'elements___content___value___children'
  | 'elements___show_in_navigation___name'
  | 'elements___show_in_navigation___type'
  | 'elements___show_in_navigation___value'
  | 'elements___show_in_navigation___value___codename'
  | 'elements___show_in_navigation___value___name'
  | 'elements___title___name'
  | 'elements___title___type'
  | 'elements___title___value'
  | 'preferred_language'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Kontent_Item_PageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_PageEdge>;
  nodes: Array<Kontent_Item_Page>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_PageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Kontent_Item_PageGroupConnectionDistinctArgs = {
  field: Kontent_Item_PageFieldsEnum;
};


export type Kontent_Item_PageGroupConnectionMaxArgs = {
  field: Kontent_Item_PageFieldsEnum;
};


export type Kontent_Item_PageGroupConnectionMinArgs = {
  field: Kontent_Item_PageFieldsEnum;
};


export type Kontent_Item_PageGroupConnectionSumArgs = {
  field: Kontent_Item_PageFieldsEnum;
};


export type Kontent_Item_PageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_PageFieldsEnum;
};

export type Kontent_Item_PageFilterInput = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Page_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type Kontent_Item_PageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Kontent_Item_PageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Kontent_Item_Partner_ElementsFilterInput = {
  logo?: InputMaybe<Kontent_Item_Asset_Element_ValueFilterInput>;
  title?: InputMaybe<Kontent_Item_Text_Element_ValueFilterInput>;
  link?: InputMaybe<Kontent_Item_Text_Element_ValueFilterInput>;
};

export type Kontent_Item_PartnerConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_PartnerEdge>;
  nodes: Array<Kontent_Item_Partner>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_PartnerGroupConnection>;
};


export type Kontent_Item_PartnerConnectionDistinctArgs = {
  field: Kontent_Item_PartnerFieldsEnum;
};


export type Kontent_Item_PartnerConnectionMaxArgs = {
  field: Kontent_Item_PartnerFieldsEnum;
};


export type Kontent_Item_PartnerConnectionMinArgs = {
  field: Kontent_Item_PartnerFieldsEnum;
};


export type Kontent_Item_PartnerConnectionSumArgs = {
  field: Kontent_Item_PartnerFieldsEnum;
};


export type Kontent_Item_PartnerConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_PartnerFieldsEnum;
};

export type Kontent_Item_PartnerEdge = {
  next?: Maybe<Kontent_Item_Partner>;
  node: Kontent_Item_Partner;
  previous?: Maybe<Kontent_Item_Partner>;
};

export type Kontent_Item_PartnerFieldsEnum =
  | 'system___codename'
  | 'system___id'
  | 'system___language'
  | 'system___last_modified'
  | 'system___name'
  | 'system___type'
  | 'system___collection'
  | 'system___workflow_step'
  | 'elements___logo___name'
  | 'elements___logo___type'
  | 'elements___logo___value'
  | 'elements___logo___value___name'
  | 'elements___logo___value___description'
  | 'elements___logo___value___type'
  | 'elements___logo___value___size'
  | 'elements___logo___value___url'
  | 'elements___logo___value___width'
  | 'elements___logo___value___height'
  | 'elements___title___name'
  | 'elements___title___type'
  | 'elements___title___value'
  | 'elements___link___name'
  | 'elements___link___type'
  | 'elements___link___value'
  | 'preferred_language'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Kontent_Item_PartnerGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_PartnerEdge>;
  nodes: Array<Kontent_Item_Partner>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_PartnerGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Kontent_Item_PartnerGroupConnectionDistinctArgs = {
  field: Kontent_Item_PartnerFieldsEnum;
};


export type Kontent_Item_PartnerGroupConnectionMaxArgs = {
  field: Kontent_Item_PartnerFieldsEnum;
};


export type Kontent_Item_PartnerGroupConnectionMinArgs = {
  field: Kontent_Item_PartnerFieldsEnum;
};


export type Kontent_Item_PartnerGroupConnectionSumArgs = {
  field: Kontent_Item_PartnerFieldsEnum;
};


export type Kontent_Item_PartnerGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_PartnerFieldsEnum;
};

export type Kontent_Item_PartnerFilterInput = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Partner_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type Kontent_Item_PartnerSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Kontent_Item_PartnerFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Kontent_Item_Partneri_ElementsFilterInput = {
  partners?: InputMaybe<Kontent_Item_Modular_Content_Element_ValueFilterInput>;
};

export type Kontent_Item_PartneriConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_PartneriEdge>;
  nodes: Array<Kontent_Item_Partneri>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_PartneriGroupConnection>;
};


export type Kontent_Item_PartneriConnectionDistinctArgs = {
  field: Kontent_Item_PartneriFieldsEnum;
};


export type Kontent_Item_PartneriConnectionMaxArgs = {
  field: Kontent_Item_PartneriFieldsEnum;
};


export type Kontent_Item_PartneriConnectionMinArgs = {
  field: Kontent_Item_PartneriFieldsEnum;
};


export type Kontent_Item_PartneriConnectionSumArgs = {
  field: Kontent_Item_PartneriFieldsEnum;
};


export type Kontent_Item_PartneriConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_PartneriFieldsEnum;
};

export type Kontent_Item_PartneriEdge = {
  next?: Maybe<Kontent_Item_Partneri>;
  node: Kontent_Item_Partneri;
  previous?: Maybe<Kontent_Item_Partneri>;
};

export type Kontent_Item_PartneriFieldsEnum =
  | 'system___codename'
  | 'system___id'
  | 'system___language'
  | 'system___last_modified'
  | 'system___name'
  | 'system___type'
  | 'system___collection'
  | 'system___workflow_step'
  | 'elements___partners___name'
  | 'elements___partners___type'
  | 'elements___partners___value'
  | 'elements___partners___value___id'
  | 'elements___partners___value___preferred_language'
  | 'elements___partners___value___children'
  | 'preferred_language'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Kontent_Item_PartneriGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_PartneriEdge>;
  nodes: Array<Kontent_Item_Partneri>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_PartneriGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Kontent_Item_PartneriGroupConnectionDistinctArgs = {
  field: Kontent_Item_PartneriFieldsEnum;
};


export type Kontent_Item_PartneriGroupConnectionMaxArgs = {
  field: Kontent_Item_PartneriFieldsEnum;
};


export type Kontent_Item_PartneriGroupConnectionMinArgs = {
  field: Kontent_Item_PartneriFieldsEnum;
};


export type Kontent_Item_PartneriGroupConnectionSumArgs = {
  field: Kontent_Item_PartneriFieldsEnum;
};


export type Kontent_Item_PartneriGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_PartneriFieldsEnum;
};

export type Kontent_Item_PartneriFilterInput = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Partneri_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type Kontent_Item_PartneriSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Kontent_Item_PartneriFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Kontent_Item_Product_Type_ElementsFilterInput = {
  type?: InputMaybe<Kontent_Item_Multiple_Choice_Element_ValueFilterInput>;
  image?: InputMaybe<Kontent_Item_Asset_Element_ValueFilterInput>;
};

export type Kontent_Item_Product_TypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_Product_TypeEdge>;
  nodes: Array<Kontent_Item_Product_Type>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_Product_TypeGroupConnection>;
};


export type Kontent_Item_Product_TypeConnectionDistinctArgs = {
  field: Kontent_Item_Product_TypeFieldsEnum;
};


export type Kontent_Item_Product_TypeConnectionMaxArgs = {
  field: Kontent_Item_Product_TypeFieldsEnum;
};


export type Kontent_Item_Product_TypeConnectionMinArgs = {
  field: Kontent_Item_Product_TypeFieldsEnum;
};


export type Kontent_Item_Product_TypeConnectionSumArgs = {
  field: Kontent_Item_Product_TypeFieldsEnum;
};


export type Kontent_Item_Product_TypeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_Product_TypeFieldsEnum;
};

export type Kontent_Item_Product_TypeEdge = {
  next?: Maybe<Kontent_Item_Product_Type>;
  node: Kontent_Item_Product_Type;
  previous?: Maybe<Kontent_Item_Product_Type>;
};

export type Kontent_Item_Product_TypeFieldsEnum =
  | 'system___codename'
  | 'system___id'
  | 'system___language'
  | 'system___last_modified'
  | 'system___name'
  | 'system___type'
  | 'system___collection'
  | 'system___workflow_step'
  | 'elements___type___name'
  | 'elements___type___type'
  | 'elements___type___value'
  | 'elements___type___value___codename'
  | 'elements___type___value___name'
  | 'elements___image___name'
  | 'elements___image___type'
  | 'elements___image___value'
  | 'elements___image___value___name'
  | 'elements___image___value___description'
  | 'elements___image___value___type'
  | 'elements___image___value___size'
  | 'elements___image___value___url'
  | 'elements___image___value___width'
  | 'elements___image___value___height'
  | 'preferred_language'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Kontent_Item_Product_TypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_Product_TypeEdge>;
  nodes: Array<Kontent_Item_Product_Type>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_Product_TypeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Kontent_Item_Product_TypeGroupConnectionDistinctArgs = {
  field: Kontent_Item_Product_TypeFieldsEnum;
};


export type Kontent_Item_Product_TypeGroupConnectionMaxArgs = {
  field: Kontent_Item_Product_TypeFieldsEnum;
};


export type Kontent_Item_Product_TypeGroupConnectionMinArgs = {
  field: Kontent_Item_Product_TypeFieldsEnum;
};


export type Kontent_Item_Product_TypeGroupConnectionSumArgs = {
  field: Kontent_Item_Product_TypeFieldsEnum;
};


export type Kontent_Item_Product_TypeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_Product_TypeFieldsEnum;
};

export type Kontent_Item_Product_TypeFilterInput = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Product_Type_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type Kontent_Item_Product_TypeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Kontent_Item_Product_TypeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Kontent_Item_Products_Disambiguation_ElementsFilterInput = {
  product_types?: InputMaybe<Kontent_Item_Modular_Content_Element_ValueFilterInput>;
};

export type Kontent_Item_Products_DisambiguationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_Products_DisambiguationEdge>;
  nodes: Array<Kontent_Item_Products_Disambiguation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_Products_DisambiguationGroupConnection>;
};


export type Kontent_Item_Products_DisambiguationConnectionDistinctArgs = {
  field: Kontent_Item_Products_DisambiguationFieldsEnum;
};


export type Kontent_Item_Products_DisambiguationConnectionMaxArgs = {
  field: Kontent_Item_Products_DisambiguationFieldsEnum;
};


export type Kontent_Item_Products_DisambiguationConnectionMinArgs = {
  field: Kontent_Item_Products_DisambiguationFieldsEnum;
};


export type Kontent_Item_Products_DisambiguationConnectionSumArgs = {
  field: Kontent_Item_Products_DisambiguationFieldsEnum;
};


export type Kontent_Item_Products_DisambiguationConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_Products_DisambiguationFieldsEnum;
};

export type Kontent_Item_Products_DisambiguationEdge = {
  next?: Maybe<Kontent_Item_Products_Disambiguation>;
  node: Kontent_Item_Products_Disambiguation;
  previous?: Maybe<Kontent_Item_Products_Disambiguation>;
};

export type Kontent_Item_Products_DisambiguationFieldsEnum =
  | 'system___codename'
  | 'system___id'
  | 'system___language'
  | 'system___last_modified'
  | 'system___name'
  | 'system___type'
  | 'system___collection'
  | 'system___workflow_step'
  | 'elements___product_types___name'
  | 'elements___product_types___type'
  | 'elements___product_types___value'
  | 'elements___product_types___value___id'
  | 'elements___product_types___value___preferred_language'
  | 'elements___product_types___value___children'
  | 'preferred_language'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Kontent_Item_Products_DisambiguationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_Item_Products_DisambiguationEdge>;
  nodes: Array<Kontent_Item_Products_Disambiguation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_Item_Products_DisambiguationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Kontent_Item_Products_DisambiguationGroupConnectionDistinctArgs = {
  field: Kontent_Item_Products_DisambiguationFieldsEnum;
};


export type Kontent_Item_Products_DisambiguationGroupConnectionMaxArgs = {
  field: Kontent_Item_Products_DisambiguationFieldsEnum;
};


export type Kontent_Item_Products_DisambiguationGroupConnectionMinArgs = {
  field: Kontent_Item_Products_DisambiguationFieldsEnum;
};


export type Kontent_Item_Products_DisambiguationGroupConnectionSumArgs = {
  field: Kontent_Item_Products_DisambiguationFieldsEnum;
};


export type Kontent_Item_Products_DisambiguationGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_Item_Products_DisambiguationFieldsEnum;
};

export type Kontent_Item_Products_DisambiguationFilterInput = {
  system?: InputMaybe<Kontent_Item_SystemFilterInput>;
  elements?: InputMaybe<Kontent_Item_Products_Disambiguation_ElementsFilterInput>;
  preferred_language?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type Kontent_Item_Products_DisambiguationSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Kontent_Item_Products_DisambiguationFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Kontent_Taxonomy_SystemFilterInput = {
  codename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  last_modified?: InputMaybe<DateQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type Kontent_Taxonomy_TermFilterListInput = {
  elemMatch?: InputMaybe<Kontent_Taxonomy_TermFilterInput>;
};

export type Kontent_Taxonomy_TermFilterInput = {
  codename?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  terms?: InputMaybe<Kontent_Taxonomy_TermFilterListInput>;
};

export type Kontent_TaxonomyConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_TaxonomyEdge>;
  nodes: Array<Kontent_Taxonomy>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_TaxonomyGroupConnection>;
};


export type Kontent_TaxonomyConnectionDistinctArgs = {
  field: Kontent_TaxonomyFieldsEnum;
};


export type Kontent_TaxonomyConnectionMaxArgs = {
  field: Kontent_TaxonomyFieldsEnum;
};


export type Kontent_TaxonomyConnectionMinArgs = {
  field: Kontent_TaxonomyFieldsEnum;
};


export type Kontent_TaxonomyConnectionSumArgs = {
  field: Kontent_TaxonomyFieldsEnum;
};


export type Kontent_TaxonomyConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_TaxonomyFieldsEnum;
};

export type Kontent_TaxonomyEdge = {
  next?: Maybe<Kontent_Taxonomy>;
  node: Kontent_Taxonomy;
  previous?: Maybe<Kontent_Taxonomy>;
};

export type Kontent_TaxonomyFieldsEnum =
  | 'id'
  | 'system___codename'
  | 'system___id'
  | 'system___last_modified'
  | 'system___name'
  | 'terms'
  | 'terms___codename'
  | 'terms___name'
  | 'terms___terms'
  | 'terms___terms___codename'
  | 'terms___terms___name'
  | 'terms___terms___terms'
  | 'terms___terms___terms___codename'
  | 'terms___terms___terms___name'
  | 'terms___terms___terms___terms'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type Kontent_TaxonomyGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Kontent_TaxonomyEdge>;
  nodes: Array<Kontent_Taxonomy>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Kontent_TaxonomyGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Kontent_TaxonomyGroupConnectionDistinctArgs = {
  field: Kontent_TaxonomyFieldsEnum;
};


export type Kontent_TaxonomyGroupConnectionMaxArgs = {
  field: Kontent_TaxonomyFieldsEnum;
};


export type Kontent_TaxonomyGroupConnectionMinArgs = {
  field: Kontent_TaxonomyFieldsEnum;
};


export type Kontent_TaxonomyGroupConnectionSumArgs = {
  field: Kontent_TaxonomyFieldsEnum;
};


export type Kontent_TaxonomyGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Kontent_TaxonomyFieldsEnum;
};

export type Kontent_TaxonomyFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  system?: InputMaybe<Kontent_Taxonomy_SystemFilterInput>;
  terms?: InputMaybe<Kontent_Taxonomy_TermFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type Kontent_TaxonomySortInput = {
  fields?: InputMaybe<Array<InputMaybe<Kontent_TaxonomyFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = { allKontentItemHomepage: { nodes: Array<{ elements?: { content?: { value?: Array<{ system: { id: string }, elements?: { title?: { value?: string | null } | null, subtitle?: { value?: string | null } | null, cta?: { value?: string | null } | null, image?: { value?: Array<{ url: string, width?: number | null, height?: number | null } | null> | null } | null } | null } | {} | null> | null } | null } | null }> }, allKontentItemPartneri: { nodes: Array<{ elements?: { partners?: { name: string, type: string, value?: Array<{ system: { id: string }, elements?: { title?: { value?: string | null } | null, logo?: { value?: Array<{ name: string, type: string, size: number, url: string, width?: number | null, height?: number | null } | null> | null } | null, link?: { value?: string | null } | null } | null } | {} | null> | null } | null } | null }> } };

export type ProductsDisambiguationQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsDisambiguationQuery = { kontentItemProductsDisambiguation?: { system: { id: string }, elements?: { product_types?: { name: string, type: string, value?: Array<{ id: string, elements?: { type?: { value?: Array<{ name: string, codename: string } | null> | null } | null, image?: { value?: Array<{ description?: string | null, url: string, width?: number | null, height?: number | null } | null> | null } | null } | null } | {} | null> | null } | null } | null } | null };

export type MeatProductFallbackQueryVariables = Exact<{
  fallback_slug?: InputMaybe<Scalars['String']>;
}>;


export type MeatProductFallbackQuery = { kontentItemMeatProduct?: { system: { id: string }, elements?: { url_slug?: { value?: string | null } | null, produkt_core__name?: { value?: string | null } | null, produkt_core__description?: { value?: string | null } | null, produkt_core__producer?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__country?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__image?: { value?: Array<{ description?: string | null, url: string, width?: number | null, height?: number | null } | null> | null } | null } | null } | null };

export type MeatProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type MeatProductsQuery = { allKontentTaxonomy: { nodes: Array<{ terms?: Array<{ codename?: string | null, name?: string | null } | null> | null, system: { codename: string, name: string } }> }, allKontentItemMeatProduct: { edges: Array<{ node: { system: { id: string }, elements?: { url_slug?: { value?: string | null } | null, produkt_core__name?: { value?: string | null } | null, produkt_core__description?: { value?: string | null } | null, produkt_core__producer?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__country?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__image?: { value?: Array<{ description?: string | null, url: string, width?: number | null, height?: number | null } | null> | null } | null } | null } }> } };

export type MeatProductQueryVariables = Exact<{
  elements__url_slug__value: Scalars['String'];
}>;


export type MeatProductQuery = { kontentItemMeatProduct?: { system: { id: string }, elements?: { url_slug?: { value?: string | null } | null, produkt_core__name?: { value?: string | null } | null, produkt_core__description?: { value?: string | null } | null, produkt_core__producer?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__country?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__image?: { value?: Array<{ description?: string | null, url: string, width?: number | null, height?: number | null } | null> | null } | null } | null } | null };

export type DiaryProductFallbackQueryVariables = Exact<{
  fallback_slug?: InputMaybe<Scalars['String']>;
}>;


export type DiaryProductFallbackQuery = { kontentItemDiaryProduct?: { system: { id: string }, elements?: { url_slug?: { value?: string | null } | null, produkt_core__name?: { value?: string | null } | null, produkt_core__description?: { value?: string | null } | null, produkt_core__producer?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__country?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, diary_type?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, milk_type?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__image?: { value?: Array<{ description?: string | null, url: string, width?: number | null, height?: number | null } | null> | null } | null, weight_freeform?: { value?: string | null } | null, pieces_in_package?: { value?: number | null } | null } | null } | null };

export type DiaryProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type DiaryProductsQuery = { allKontentTaxonomy: { nodes: Array<{ terms?: Array<{ codename?: string | null, name?: string | null } | null> | null, system: { codename: string, name: string } }> }, allKontentItemDiaryProduct: { edges: Array<{ node: { system: { id: string }, elements?: { url_slug?: { value?: string | null } | null, produkt_core__name?: { value?: string | null } | null, produkt_core__description?: { value?: string | null } | null, produkt_core__producer?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__country?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, diary_type?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, milk_type?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__image?: { value?: Array<{ description?: string | null, url: string, width?: number | null, height?: number | null } | null> | null } | null } | null } }> } };

export type DiaryProductQueryVariables = Exact<{
  elements__url_slug__value: Scalars['String'];
}>;


export type DiaryProductQuery = { kontentItemDiaryProduct?: { system: { id: string }, elements?: { url_slug?: { value?: string | null } | null, produkt_core__name?: { value?: string | null } | null, produkt_core__description?: { value?: string | null } | null, produkt_core__producer?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__country?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, diary_type?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, milk_type?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__image?: { value?: Array<{ description?: string | null, url: string, width?: number | null, height?: number | null } | null> | null } | null, weight_freeform?: { value?: string | null } | null, pieces_in_package?: { value?: number | null } | null } | null } | null };

export type OtherProductFallbackQueryVariables = Exact<{
  fallback_slug?: InputMaybe<Scalars['String']>;
}>;


export type OtherProductFallbackQuery = { kontentItemOtherProduct?: { system: { id: string }, elements?: { url_slug?: { value?: string | null } | null, produkt_core__name?: { value?: string | null } | null, produkt_core__description?: { value?: string | null } | null, produkt_core__producer?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__country?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__image?: { value?: Array<{ description?: string | null, url: string, width?: number | null, height?: number | null } | null> | null } | null } | null } | null };

export type OtherProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type OtherProductsQuery = { allKontentTaxonomy: { nodes: Array<{ terms?: Array<{ codename?: string | null, name?: string | null } | null> | null, system: { codename: string, name: string } }> }, allKontentItemOtherProduct: { edges: Array<{ node: { system: { id: string }, elements?: { url_slug?: { value?: string | null } | null, produkt_core__name?: { value?: string | null } | null, produkt_core__description?: { value?: string | null } | null, produkt_core__producer?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__country?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__image?: { value?: Array<{ description?: string | null, url: string, width?: number | null, height?: number | null } | null> | null } | null } | null } }> } };

export type OtherProductQueryVariables = Exact<{
  elements__url_slug__value: Scalars['String'];
}>;


export type OtherProductQuery = { kontentItemOtherProduct?: { system: { id: string }, elements?: { url_slug?: { value?: string | null } | null, produkt_core__name?: { value?: string | null } | null, produkt_core__description?: { value?: string | null } | null, produkt_core__producer?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__country?: { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null } | null, produkt_core__image?: { value?: Array<{ description?: string | null, url: string, width?: number | null, height?: number | null } | null> | null } | null } | null } | null };

export type TaxonomyElementFieldsFragment = { name: string, taxonomy_group: string, value?: Array<{ name: string, codename: string } | null> | null };

export type KontentImageFragment = { value?: Array<{ description?: string | null, url: string, width?: number | null, height?: number | null } | null> | null };

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQueryQuery = { allSiteFunction: { nodes: Array<{ functionRoute: string }> }, allSitePage: { nodes: Array<{ path: string }> } };
