Ext.define('MyApp.view.override.MyPanel1', {
    override: 'MyApp.view.MyPanel1',
    loadRecord: function(){
        Ext.Msg.alert("been there");
    },
    requires: ['Ext.ux.LeafletMap'],

    title: 'LeafletMap',
    iconCls: 'maps',
    layout: 'fit',

    items: [
        {
            // Ext.ux.LeafletMap Component
            xtype: 'leafletmap',
            id: 'leafletmap',
            useCurrentLocation: false,
            autoMapCenter: false,
            mapOptions: {
                zoom: 15
            }
        }
    ]
        
    });