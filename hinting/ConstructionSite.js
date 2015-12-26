var ConstructionSite = function () {};

ConstructionSite.prototype = {
    /**
     * @type string
     */
    id: '',

    /**
     * @type boolean
     */
    my: false,

    /**
     * @type {{username: string}}
     */
    owner: null,

    /**
     * @type RoomPosition
     */
    pos: null,

    /**
     * @type number
     */
    progress: 0,

    /**
     * @type number
     */
    progressTotal: 0,

    /**
     * @type Room
     */
    room: null,

    /**
     * @type {STRUCTURE_EXTENSION|STRUCTURE_RAMPART|STRUCTURE_ROAD|STRUCTURE_SPAWN|STRUCTURE_LINK|STRUCTURE_WALL|STRUCTURE_KEEPER_LAIR|STRUCTURE_CONTROLLER|STRUCTURE_STORAGE|STRUCTURE_TOWER|STRUCTURE_OBSERVER|STRUCTURE_POWER_BANK|STRUCTURE_POWER_SPAWN}
     */
    structureType: null,

    /**
     * @return {OK|ERR_NOT_OWNER}
     */
    remove: function () {}
};
