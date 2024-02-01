export class RegexUtil {
  static readonly cleanHtmlTags = /<[^>]*>/g;
  static readonly attrIsHtml = /_html$/;
  static f_cleanHtmlTags(text: string, replace: string) {
    return text?.replace(RegexUtil.cleanHtmlTags, replace);
  }
}
