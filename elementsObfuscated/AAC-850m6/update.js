function(instance, properties, context){
	function _0x5286(_0x31410c, _0x20c3f7) {
    var _0x99715d = _0x9971();
    return _0x5286 = function (_0x5286bc, _0xb4e272) {
        _0x5286bc = _0x5286bc - 0x75;
        var _0x2595ff = _0x99715d[_0x5286bc];
        return _0x2595ff;
    }, _0x5286(_0x31410c, _0x20c3f7);
}
function _0x9971() {
    var _0x1479a8 = [
        '57AyXkvr',
        'height',
        'createRadialGradient',
        'fill',
        '1546406ilTmKy',
        'fillStyle',
        '24489GRIeyX',
        'innerHeight',
        'rgb(66,\x2066,\x2066)',
        '6398570GEvNYF',
        '438ZpgKoe',
        '148756jrMGTT',
        'radius',
        'width',
        'length',
        '312euXQYc',
        'getElementById',
        'color',
        'beginPath',
        'clearRect',
        'random',
        'addColorStop',
        'getContext',
        '714525ZUgzED',
        '15685yaQEPO',
        'innerWidth',
        '5133590UrEMcD'
    ];
    _0x9971 = function () {
        return _0x1479a8;
    };
    return _0x9971();
}
(function (_0x8337, _0x293663) {
    var _0x1ac289 = _0x5286, _0x1ece99 = _0x8337();
    while (!![]) {
        try {
            var _0x272ef2 = -parseInt(_0x1ac289(0x7a)) / 0x1 + parseInt(_0x1ac289(0x82)) / 0x2 + parseInt(_0x1ac289(0x7e)) / 0x3 * (-parseInt(_0x1ac289(0x89)) / 0x4) + -parseInt(_0x1ac289(0x7b)) / 0x5 * (parseInt(_0x1ac289(0x88)) / 0x6) + parseInt(_0x1ac289(0x7d)) / 0x7 + parseInt(_0x1ac289(0x8d)) / 0x8 * (-parseInt(_0x1ac289(0x84)) / 0x9) + parseInt(_0x1ac289(0x87)) / 0xa;
            if (_0x272ef2 === _0x293663)
                break;
            else
                _0x1ece99['push'](_0x1ece99['shift']());
        } catch (_0x8d4b7e) {
            _0x1ece99['push'](_0x1ece99['shift']());
        }
    }
}(_0x9971, 0x5f432));
function update(_0xa64e97, _0x24f1a8, _0x9d2f09) {
    var _0x5ddd42 = _0x5286, _0x584cf6 = document[_0x5ddd42(0x8e)]('canvas'), _0x5c579a = _0x584cf6[_0x5ddd42(0x79)]('2d'), _0x2bdaff = window[_0x5ddd42(0x7c)], _0x1812ad = window[_0x5ddd42(0x85)];
    _0x584cf6['width'] = _0x2bdaff, _0x584cf6[_0x5ddd42(0x7f)] = _0x1812ad;
    var _0x269292 = [], _0x2830ac = 0x64, _0x15f081 = 0x64;
    for (var _0x46fbdc = 0x0; _0x46fbdc < 0x64; _0x46fbdc++) {
        _0x269292['push'](new _0x1d98ef());
    }
    function _0x1d98ef() {
        var _0x4783c1 = _0x5ddd42;
        this['x'] = Math[_0x4783c1(0x77)]() * _0x2bdaff, this['y'] = Math[_0x4783c1(0x77)]() * _0x1812ad, this['vx'] = Math[_0x4783c1(0x77)]() * 0x4 - 0x1, this['vy'] = Math[_0x4783c1(0x77)]() * 0x4 + 0x1;
        var _0x21c8b6 = Math[_0x4783c1(0x77)]() * 0x1;
        this[_0x4783c1(0x8f)] = 'rgba(' + 0xff + ',' + 0xff + ',' + 0xff + ',' + _0x21c8b6 + ')', this[_0x4783c1(0x8a)] = Math['random']() * 0x2 + 0x2;
    }
    function _0x2b1207() {
        var _0x54a48f = _0x5ddd42;
        _0x5c579a[_0x54a48f(0x76)](0x0, 0x0, _0x584cf6[_0x54a48f(0x8b)], _0x584cf6[_0x54a48f(0x7f)]);
        for (var _0x157f67 = 0x0; _0x157f67 < _0x269292[_0x54a48f(0x8c)]; _0x157f67++) {
            var _0x419ad0 = _0x269292[_0x157f67];
            _0x5c579a[_0x54a48f(0x75)]();
            var _0x744048 = _0x5c579a[_0x54a48f(0x80)](_0x419ad0['x'], _0x419ad0['y'], 0x0, _0x419ad0['x'], _0x419ad0['y'], _0x419ad0[_0x54a48f(0x8a)]);
            _0x744048[_0x54a48f(0x78)](0x1, _0x419ad0[_0x54a48f(0x8f)]), _0x744048['addColorStop'](0x1, _0x54a48f(0x86)), _0x5c579a[_0x54a48f(0x83)] = _0x744048, _0x5c579a['arc'](_0x419ad0['x'], _0x419ad0['y'], _0x419ad0[_0x54a48f(0x8a)], Math['PI'] * 0x2, ![]), _0x5c579a[_0x54a48f(0x81)](), _0x419ad0['x'] += _0x419ad0['vx'], _0x419ad0['y'] += _0x419ad0['vy'];
            if (_0x419ad0['x'] < -0x32)
                _0x419ad0['x'] = _0x2bdaff + 0x32;
            if (_0x419ad0['y'] < -0x32)
                _0x419ad0['y'] = _0x1812ad + 0x32;
            if (_0x419ad0['x'] > _0x2bdaff + 0x32)
                _0x419ad0['x'] = -0x32;
            if (_0x419ad0['y'] > _0x1812ad + 0x32)
                _0x419ad0['y'] = -0x32;
        }
    }
    setInterval(_0x2b1207, 0x19);
}
	update(instance, properties, context);
}