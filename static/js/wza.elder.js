var __wzaOam = Ls.cookies('wzaOam'),
    __wzaOamText = '长辈版';
if (__wzaOam == '1') {
  __wzaOamText = '退出长辈版';
}

var __wza_btn_html = '' +
    '<li class="hidden-sm hidden-xs">' +
    ' <a href="javascript:void(0)" class="old_btn j-oam" role="button" aria-label="长辈版模式切换">' +
    '   <span class="ico"></span><span class="tit" id="wza_elder">' + __wzaOamText + '</span>' +
    ' </a>' +
    '</li>' +
    '<li class="num-wza hidden-sm hidden-xs">' +
    ' <a role="button" aria-label="无障碍模式切换" class="j-wza" href="javascript:void(0)">' +
    '   <span class="ico"></span><span class="tit">无障碍</span>' +
    ' </a>' +
    '</li>';

document.write(__wza_btn_html);
