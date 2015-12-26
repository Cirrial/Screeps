/*
 *************************
 * Result Code Constants *
 *************************
 */
var
    OK = 0,
    ERR_NOT_OWNER = -1,
    ERR_NO_PATH = -2,
    ERR_NAME_EXISTS = -3,
    ERR_BUSY = -4,
    ERR_NOT_FOUND = -5,
    ERR_NOT_ENOUGH_RESOURCES = -6,
    ERR_INVALID_TARGET = -7,
    ERR_FULL = -8,
    ERR_NOT_IN_RANGE = -9,
    ERR_INVALID_ARGS = -10,
    ERR_TIRED = -11,
    ERR_NO_BODYPART = -12,
    ERR_NOT_ENOUGH_EXTENSIONS = -6,
    ERR_RCL_NOT_ENOUGH = -14,
    ERR_GCL_NOT_ENOUGH = -15
    ;

/*
 ***********************
 * Room.find Constants *
 ***********************
 */
var
    FIND_EXIT_TOP = 1,
    FIND_EXIT_RIGHT = 3,
    FIND_EXIT_BOTTOM = 5,
    FIND_EXIT_LEFT = 7,
    FIND_EXIT = 10,
    FIND_CREEPS = 101,
    FIND_MY_CREEPS = 102,
    FIND_HOSTILE_CREEPS = 103,
    FIND_SOURCES_ACTIVE = 104,
    FIND_SOURCES = 105,
    FIND_DROPPED_ENERGY = 106,
    FIND_STRUCTURES = 107,
    FIND_MY_STRUCTURES = 108,
    FIND_HOSTILE_STRUCTURES = 109,
    FIND_FLAGS = 110,
    FIND_CONSTRUCTION_SITES = 111,
    FIND_MY_SPAWNS = 112,
    FIND_HOSTILE_SPAWNS = 113
    ;

/*
 ***********************
 * Direction Constants *
 ***********************
 */
var
    TOP = 1,
    TOP_RIGHT = 2,
    RIGHT = 3,
    BOTTOM_RIGHT = 4,
    BOTTOM = 5,
    BOTTOM_LEFT = 6,
    LEFT = 7,
    TOP_LEFT = 8
    ;

/*
 ***********************
 * Body Part Constants *
 ***********************
 */
var
    MOVE = 'move',
    WORK = 'work',
    CARRY = 'carry',
    ATTACK = 'attack',
    RANGED_ATTACK = 'ranged_attack',
    TOUGH = 'tough',
    HEAL = 'heal'
    ;

var BODYPART_COST = {
    move: 50,
    work: 100,
    attack: 80,
    carry: 50,
    heal: 250,
    ranged_attack: 150,
    tough: 10
};

var BODYPARTS_ALL = [
    MOVE,
    WORK,
    CARRY,
    ATTACK,
    RANGED_ATTACK,
    TOUGH,
    HEAL
];

var
    CARRY_CAPACITY = 50,
    HARVEST_POWER = 2,
    REPAIR_POWER = 100,
    BUILD_POWER = 5,
    ATTACK_POWER = 30,
    UPGRADE_CONTROLLER_POWER = 1,
    RANGED_ATTACK_POWER = 10,
    HEAL_POWER = 12,
    RANGED_HEAL_POWER = 4
    ;

/*
 ****************************
 * Structure Type Constants *
 ****************************
 */
var
    STRUCTURE_EXTENSION = "extension",
    STRUCTURE_RAMPART = "rampart",
    STRUCTURE_ROAD = "road",
    STRUCTURE_SPAWN = "spawn",
    STRUCTURE_LINK = "link",
    STRUCTURE_WALL = "constructedWall",
    STRUCTURE_KEEPER_LAIR = "keeperLair",
    STRUCTURE_CONTROLLER = "controller",
    STRUCTURE_STORAGE = "storage",
    STRUCTURE_TOWER = "tower",
    STRUCTURE_OBSERVER = "observer",
    STRUCTURE_POWER_BANK = "powerBank",
    STRUCTURE_POWER_SPAWN = "powerSpawn"
    ;

/*
 *******************
 * Color Constants *
 *******************
 */
var
    COLOR_RED = 'red',
    COLOR_PURPLE = 'purple',
    COLOR_BLUE = 'blue',
    COLOR_CYAN = 'cyan',
    COLOR_GREEN = 'green',
    COLOR_YELLOW = 'yellow',
    COLOR_ORANGE = 'orange',
    COLOR_BROWN = 'brown',
    COLOR_GREY = 'grey',
    COLOR_WHITE = 'white'
    ;

/*
 ***********************
 * Room Mode Constants *
 ***********************
 */
var
    MODE_SIMULATION = 'simulation',
    MODE_WORLD = 'world'
    ;

// Hi it's me cirr
// The following additional constants are brought to you
// by http://screeps.wikia.com/wiki/Globals
// Hooray for shoddy official documentation!

/*
 * Resource Type Constants
 */

var
    RESOURCE_ENERGY = "energy",
    RESOURCE_POWER = "power",
    RESOURCES_ALL = [RESOURCE_ENERGY, RESOURCE_POWER]
    ;

/*
 * Creep Constants
 */

var
    CREEP_SPAWN_TIME = 3,   // Base spawn time
    CREEP_LIFE_TIME = 1800,   // Lifetime of a creep
    CREEP_CORPSE_RATE = 0.2 // Use unknown
    ;

/*
 * Obstacle Type Constants
 */

var OBSTACLE_OBJECT_TYPES = [
    'spawn',
    'creep',
    'wall',
    'source',
    'constructedWall',
    'extension',
    'link',
    'storage'
];

/*
 * Energy Constants
 */

var
    ENERGY_REGEN_TIME = 300,   // Time untill source regenerates new energy since first harvested energy
    ENERGY_REGEN_AMOUNT = 3000,   // Amount of energy a source has once it respawns
    ENERGY_DECAY = 1000,   // Rate of vanished energy from dropped energy per tick
    REPAIR_COST = 0.01 // Use unknown
    ;

/*
 * Rampant Constants
 */

var
    RAMPART_DECAY_AMOUNT = 300, // Vanishing health from rampart per cycle
    RAMPART_DECAY_TIME = 100,// Ticks per decay cycle
    RAMPART_HITS = 1,// Full health of a rampart
    RAMPART_HITS_MAX = {      // Maximum health of a rampart
        2: 300000,
        3: 1000000,
        4: 3000000,
        5: 10000000,
        6: 30000000,
        7: 100000000,
        8: 300000000
    }
    ;

/*
 * Spawn Constants
 */

var
    SPAWN_HITS = 5000, // Full health of a spawn
    SPAWN_ENERGY_START = 300,// Amount of energy a spawn starts with when not doing custon mode
    SPAWN_ENERGY_CAPACITY = 300 // Maximum capacity of energy storage of a spawn
    ;

/*
 * Source Constants
 */

var
    SOURCE_ENERGY_CAPACITY = 3000 // Maximum capacity of a source
    ;

/*
 * Road Constants
 */

var
    ROAD_HITS = 5000, // Full health of a road
    ROAD_WEAROUT = 1, // The amount of health a road looses each use
    ROAD_DECAY_AMOUNT = 100, // How much a road decays per decay event
    ROAD_DECAY_TIME = 1000,// Time between decay events
    CONSTRUCTION_COST_ROAD_SWAMP_RATIO = 5 // Cost increase factor when building on swamps
    ;

/*
 * Wall Constants
 */

var
    WALL_HITS = 1, // Full health of a wall
    WALL_HITS_MAX = 300000000 // Maximum health of a wall
    ;

/*
 * Extension Constants
 */

var
    EXTENSION_HITS = 1000, // Full health of an extension
    EXTENSION_ENERGY_CAPACITY = 50 // Maximum capacity of energy storage of an extension
    ;

/*
 * Link Constants
 */

var
    LINK_HITS = 1000,    // Hits a link gets when constructed
    LINK_HITS_MAX = 1000,   // Maximum hits a link can get
    LINK_CAPACITY = 500,    // Capacity of a link structure
    LINK_COOLDOWN = 1,   // Amount of cooldown after sending energy to another link structure
    LINK_LOSS_RATIO = 0.03 // Transfer loss while sending energy to another link structure
    ;

/*
 * Storage Constants
 */

var
    STORAGE_CAPACITY = 500000, // Amount of energy a storage structure can store
    STORAGE_HITS = 10000 // Amount of maximum hits a storage structure has, also the amount of hits when constructed
    ;

// I'm missing anything on towers, observers and power spawners. Sucks.

/*
 * Controller Structure Limits
 */
// These are actually outdated on wiki - you can build roads at any control level now
// also three entire structures were missing, whoops, hooray for console spam
var CONTROLLER_STRUCTURES = {
    spawn: {
        0: 0,
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 2,
        8: 3
    },
    extension: {
        0: 0,
        1: 0,
        2: 5,
        3: 10,
        4: 20,
        5: 30,
        6: 40,
        7: 50,
        8: 60
    },
    link: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 2,
        6: 3,
        7: 4,
        8: 6
    },
    road: {
        0: 2500,
        1: 2500,
        2: 2500,
        3: 2500,
        4: 2500,
        5: 2500,
        6: 2500,
        7: 2500,
        8: 2500
    },
    constructedWall: {
        1: 0,
        2: 2500,
        3: 2500,
        4: 2500,
        5: 2500,
        6: 2500,
        7: 2500,
        8: 2500
    },
    rampart: {
        1: 0,
        2: 2500,
        3: 2500,
        4: 2500,
        5: 2500,
        6: 2500,
        7: 2500,
        8: 2500
    },
    storage: {
        1: 0,
        2: 0,
        3: 0,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1
    },
    tower: {
        1: 0,
        2: 0,
        3: 1,
        4: 1,
        5: 1,
        6: 2,
        7: 2,
        8: 4
    },
    observer: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 1
    },
    powerSpawn: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 1
    }
};

/*
 * GCL Leveling
 */

var
    GCL_POW = 2.2, // Multiplication rate per level?
    GCL_MULTIPLY = 200000   // Base level amount?
    ;