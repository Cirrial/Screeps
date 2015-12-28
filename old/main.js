// investigate this:
// http://support.screeps.com/hc/en-us/community/posts/201432602-Functional-Roles

var builder = require('builder');
//var harvester = require('harvester');
var miner = require('miner');
var courier = require('courier');
var guard = require('guard');
var spawner = require('spawner');
var healer = require('healer');

module.exports.loop = function () {

    // spawning behaviour
    for(var spawnName in Game.spawns) {
        var spawn = Game.spawns[spawnName];
        spawner(spawn);
    }

    // action behaviour
    for(var creepName in Game.creeps) {
        var creep = Game.creeps[creepName];
        switch(creep.memory.role) {
            case 'builder':
                builder(creep);
                break;
            //case 'harvester':
            //    harvester(creep);
            //    break;
            case 'guard':
                guard(creep);
                break;
            case 'healer':
                healer(creep);
                break;
            case 'miner':
                miner(creep);
                break;
            case 'courier':
                courier(creep);
                break;
        }
    }
};