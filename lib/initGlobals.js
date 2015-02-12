// define the map object
var mainMap = undefined;
// define the background layer object
var backgroundLayer = undefined;

// define a testObj for general debugging purpose
var testObj = {};

// define a regionCode/NameList for a selected Case Area(s), the region unit can be LGA or SLA or Suburb level
var ca = {};
// this part should be static
ca.regionLayerReferenceName = 'ca_region_polygon'; //this name is used for ol layer control (e.g. visibility)
ca.regionLayerName = 'INDICATOR:lga_polygon';
ca.regionGeomAttributeString = 'wkb_geometry';
ca.regionCodeAttributeString = 'lga_code';
ca.regionNameAttributeString = 'lga_name';
ca.srsName = 'EPSG:4326';

// this part should be defined by user from the UI
ca.regionCodeList = []; //[343, 351];
ca.regionNameList = []; //['MELBOURNE', 'MORELAND'];

var GLOBAL_VAR = {};
GLOBAL_VAR.g_enablePickInfo = false;
GLOBAL_VAR.g_caMapLoaded = false;

GLOBAL_VAR.iopParamWindow = undefined;
GLOBAL_VAR.isaParamWindow = undefined;
GLOBAL_VAR.iiaParamWindow = undefined;

var CONSTANT_FOI_LAYER = {};

CONSTANT_FOI_LAYER.layerName = 'INDICATOR:foi_point';
CONSTANT_FOI_LAYER.layerNamePolygon = 'INDICATOR:foi_polygon';
CONSTANT_FOI_LAYER.geomAttributeString = 'wkb_geometry';
CONSTANT_FOI_LAYER.srsName = 'EPSG:4326';

CONSTANT_FOI_LAYER.layerNameTrainStation = 'INDICATOR:train_station';
CONSTANT_FOI_LAYER.layerNameTramStop = 'INDICATOR:tram_stop';

CONSTANT_FOI_LAYER.layerNameSA1 = 'INDICATOR:sa1_2011_vic';
CONSTANT_FOI_LAYER.layerNameMeshblock = 'INDICATOR:mb_2011';

var SERVICE_URL = {};
SERVICE_URL.geoserverurl = 'http://115.146.85.19:8080/geoserver';
SERVICE_URL.baseurl = 'http://localhost:8585/indicator'; 
SERVICE_URL.dologin = SERVICE_URL.baseurl + '/dologin';
SERVICE_URL.dologout = SERVICE_URL.baseurl + '/dologout';
SERVICE_URL.islogined = SERVICE_URL.baseurl + '/islogined';
SERVICE_URL.proxyurl = SERVICE_URL.baseurl + "/doproxy";

SERVICE_URL.execiop = SERVICE_URL.baseurl + '/services/iop/exec'; 
SERVICE_URL.initiop = SERVICE_URL.baseurl + '/services/iop/init';
SERVICE_URL.execisa = SERVICE_URL.baseurl + '/services/isa/exec'; 
SERVICE_URL.initisa = SERVICE_URL.baseurl + '/services/isa/init';
SERVICE_URL.execiia = SERVICE_URL.baseurl + '/services/iia/exec'; 
SERVICE_URL.initiia = SERVICE_URL.baseurl + '/services/iia/init';

SERVICE_URL.loadresults = SERVICE_URL.baseurl + '/services/results';


//color ramp 
//ref: http://www.zonums.com/online/color_ramp/
CONSTANT_COLOR_RAMPS = [];
CONSTANT_COLOR_RAMP_DEFAULT = {};
CONSTANT_COLOR_RAMP_DEFAULT.name = "default"; //green-yellow-red
CONSTANT_COLOR_RAMP_DEFAULT.opacity = 0.5;
CONSTANT_COLOR_RAMP_DEFAULT.rgb = [[0,255,0],[42,255,0],[85,255,0],[127,255,0],[170,255,0],[255,255,0],[254,212,0],[212,255,0],[253,170,0],[252,127,0],[251,85,0],[250,42,0],[250,0,0]]
CONSTANT_COLOR_RAMP_DEFAULT.styles = [];
CONSTANT_COLOR_RAMPS.push(CONSTANT_COLOR_RAMP_DEFAULT);

CONSTANT_COLOR_RAMP_BLUE_RED = {};
CONSTANT_COLOR_RAMP_BLUE_RED.name = "blue-red";
CONSTANT_COLOR_RAMP_BLUE_RED.opacity = 0.5;
CONSTANT_COLOR_RAMP_BLUE_RED.rgb = [[0,0,255],[23,0,231],[46,0,208],[69,0,185],[92,0,162],[115,0,139],[139,0,115],[162,0,92],[185,0,69],[208,0,46],[231,0,23],[255,0,0]]
CONSTANT_COLOR_RAMP_BLUE_RED.styles = [];
CONSTANT_COLOR_RAMPS.push(CONSTANT_COLOR_RAMP_BLUE_RED);

CONSTANT_COLOR_RAMP_WHITE_RED = {};
CONSTANT_COLOR_RAMP_WHITE_RED.name = "white-red";
CONSTANT_COLOR_RAMP_WHITE_RED.opacity = 0.5;
CONSTANT_COLOR_RAMP_WHITE_RED.rgb = [[240,255,255],[240,231,231],[240,208,208],[240,185,185],[240,162,162],[240,139,139],[240,115,115],[240,92,92],[240,69,69],[240,46,46],[240,23,23],[240,0,0]]
CONSTANT_COLOR_RAMP_WHITE_RED.styles = [];
CONSTANT_COLOR_RAMPS.push(CONSTANT_COLOR_RAMP_WHITE_RED);
