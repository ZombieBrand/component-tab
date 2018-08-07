function Tab(selector) {
    this.selector = selector
}
Tab.prototype = {
    constructor: Tab,
    init: function () {
        this.optionCar = this.selector.children(':nth-child(odd)')    
        this.bind()
    },
    bind: function () {
        let _this = this
        $(_this.optionCar).on('click', 'li', function () {
            _this.optionContent = $(this).parent().next().children().eq($(this).index()).addClass('show').siblings().removeClass('show')
            _this.current = $(this).addClass('active').siblings().removeClass('active')
        })
    }
}
var a = new Tab($('.ct-box'))
a.init()