export class RegexUtil {
  static readonly cleanHtmlTagsBasic = /<[^>]*>/g;
  static readonly attrIsHtml = /_html$/;
  static readonly f = {
    cleanHtmlTags: (text: string, replace: string): string =>
      text?.replace(RegexUtil.cleanHtmlTagsBasic, replace),
    processHtmlTag: (htmlText: string): string => {
      let textWithoutHtml = htmlText.replace(/<(?!a\s|\/a).*?>/g, '');
      textWithoutHtml = textWithoutHtml.replace(
        /<a[^>]*href="(.*?)"[^>]*>(.*?)<\/a>/g,
        '$2[$1]',
      );
      textWithoutHtml = textWithoutHtml.replace(/\n/g, '');
      return textWithoutHtml;
    },
  };
}
