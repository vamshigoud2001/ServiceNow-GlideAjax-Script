var HelloWorld = Class.create();
HelloWorld.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    Function1: function() {
        var gr = new GlideRecord('cmdb_ci');
        var sysID = this.getParameter('sysparm_ref');
        gr.get(sysID);
        return gr.getValue('asset_tag');
    },
    type: 'HelloWorld'
});
