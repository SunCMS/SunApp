require.config({
    waitSeconds: 20,
    baseUrl: '',
    paths: {
        'underscore': '/lib/underscore.v1.4.4',
        'jquery': '/lib/jQuery.v1.11.0-beta3',
        'sun': '/sun/src/sun'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'sun': {
            exports: 'sun'
        }
    }
});

require(['underscore', 'jquery', 'sun'], function() {
    
    
    $('#btn_ok').click(function(evt) {
        
        evt.currentTarget.innerText = _.random(10, 1000);
        
        // 修改指定段位
        sun.location.updatePathname({ 1 : 'webapp', 0: 'default.html' });
        
        // 删除最后一段位
        //sun.location.updatePathname({ 0: '' });
    });
    
    $('#btn_remove').click(function(evt) {
        // update
        sun.location.updateSearch({ 'type': '更改' });
        
        // 删除
        //sun.location.updateSearch({ 'type': '' });
    });
    
});
