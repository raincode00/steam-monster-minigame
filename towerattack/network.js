// <script>
"use strict";

var g_bHalt = false;
var g_IncludeGameStats = false;

var API_JSON_STUBS = {
    "GetPlayerNames": {
        "response": {
            "names": [
                {
                    "accountid": 123456,
                    "name": "Test"
                }
            ]
            
        }
    },
    "GetPlayerData": {
        "response": {
            "player_data": {
                "hp": 1205232530.1995721,
                "current_lane": 2,
                "target": 1,
                "time_died": 1434814186,
                "gold": 3762242820533.5981,
                "active_abilities_bitfield": "0",
                "crit_damage": 0
            },
            "tech_tree": {
                "upgrades": [
                    {
                        "upgrade": 0,
                        "level": 10,
                        "cost_for_next_level": 953670
                    },
                    {
                        "upgrade": 1,
                        "level": 0,
                        "cost_for_next_level": 150
                    },
                    {
                        "upgrade": 2,
                        "level": 36,
                        "cost_for_next_level": 141760
                    },
                    {
                        "upgrade": 3,
                        "level": 1,
                        "cost_for_next_level": 240
                    },
                    {
                        "upgrade": 4,
                        "level": 0,
                        "cost_for_next_level": 240
                    },
                    {
                        "upgrade": 5,
                        "level": 0,
                        "cost_for_next_level": 240
                    },
                    {
                        "upgrade": 6,
                        "level": 0,
                        "cost_for_next_level": 240
                    },
                    {
                        "upgrade": 7,
                        "level": 25,
                        "cost_for_next_level": 444089209850
                    },
                    {
                        "upgrade": 8,
                        "level": 12,
                        "cost_for_next_level": 128550050
                    },
                    {
                        "upgrade": 9,
                        "level": 0,
                        "cost_for_next_level": 10000
                    },
                    {
                        "upgrade": 10,
                        "level": 10,
                        "cost_for_next_level": 26559920
                    },
                    {
                        "upgrade": 11,
                        "level": 1,
                        "cost_for_next_level": 11000
                    },
                    {
                        "upgrade": 12,
                        "level": 0,
                        "cost_for_next_level": 10000000
                    },
                    {
                        "upgrade": 13,
                        "level": 0,
                        "cost_for_next_level": 1000000
                    },
                    {
                        "upgrade": 14,
                        "level": 0,
                        "cost_for_next_level": 10000000
                    },
                    {
                        "upgrade": 15,
                        "level": 1,
                        "cost_for_next_level": 22000000
                    },
                    {
                        "upgrade": 16,
                        "level": 0,
                        "cost_for_next_level": 100000
                    },
                    {
                        "upgrade": 17,
                        "level": 0,
                        "cost_for_next_level": 1000000
                    },
                    {
                        "upgrade": 18,
                        "level": 0,
                        "cost_for_next_level": 2000000
                    },
                    {
                        "upgrade": 19,
                        "level": 0,
                        "cost_for_next_level": 100000
                    },
                    {
                        "upgrade": 20,
                        "level": 10,
                        "cost_for_next_level": 265599280
                    },
                    {
                        "upgrade": 21,
                        "level": 0,
                        "cost_for_next_level": 100000
                    },
                    {
                        "upgrade": 22,
                        "level": 10,
                        "cost_for_next_level": 265599280
                    },
                    {
                        "upgrade": 23,
                        "level": 10,
                        "cost_for_next_level": 2655992850
                    },
                    {
                        "upgrade": 24,
                        "level": 0,
                        "cost_for_next_level": 1000000
                    },
                    {
                        "upgrade": 25,
                        "level": 10,
                        "cost_for_next_level": 2655992850
                    },
                    {
                        "upgrade": 26,
                        "level": 10,
                        "cost_for_next_level": 26559928540
                    },
                    {
                        "upgrade": 27,
                        "level": 0,
                        "cost_for_next_level": 10000000
                    },
                    {
                        "upgrade": 28,
                        "level": 10,
                        "cost_for_next_level": 26559928540
                    },
                    {
                        "upgrade": 29,
                        "level": 11,
                        "cost_for_next_level": 584318440720
                    },
                    {
                        "upgrade": 30,
                        "level": 0,
                        "cost_for_next_level": 100000000
                    },
                    {
                        "upgrade": 31,
                        "level": 10,
                        "cost_for_next_level": 265599285480
                    },
                    {
                        "upgrade": 32,
                        "level": 0,
                        "cost_for_next_level": 1000000000
                    },
                    {
                        "upgrade": 33,
                        "level": 0,
                        "cost_for_next_level": 1000000000
                    },
                    {
                        "upgrade": 34,
                        "level": 10,
                        "cost_for_next_level": 2655992854810
                    },
                    {
                        "upgrade": 35,
                        "level": 0,
                        "cost_for_next_level": 10000000000
                    },
                    {
                        "upgrade": 36,
                        "level": 0,
                        "cost_for_next_level": 10000000000
                    },
                    {
                        "upgrade": 37,
                        "level": 8,
                        "cost_for_next_level": 5487588305120
                    },
                    {
                        "upgrade": 38,
                        "level": 0,
                        "cost_for_next_level": 99999997952
                    },
                    {
                        "upgrade": 39,
                        "level": 0,
                        "cost_for_next_level": 99999997952
                    },
                    {
                        "upgrade": 40,
                        "level": 0,
                        "cost_for_next_level": 99999997952
                    },
                    {
                        "upgrade": 41,
                        "level": 0,
                        "cost_for_next_level": 999999995904
                    },
                    {
                        "upgrade": 42,
                        "level": 0,
                        "cost_for_next_level": 999999995904
                    },
                    {
                        "upgrade": 43,
                        "level": 0,
                        "cost_for_next_level": 999999995904
                    }
                ]
                ,
                "damage_per_click": 911111370,
                "damage_multiplier_fire": 2.5,
                "damage_multiplier_water": 1,
                "damage_multiplier_air": 1,
                "damage_multiplier_earth": 1,
                "damage_multiplier_crit": 39.5,
                "unlocked_abilities_bitfield": "640",
                "hp_multiplier": 1211137.2999995723,
                "crit_percentage": 1.2699999753385782,
                "badge_points": 0,
                "ability_items": [
                    {
                        "ability": 15,
                        "quantity": 27
                    },
                    {
                        "ability": 26,
                        "quantity": 88801
                    },
                    {
                        "ability": 27,
                        "quantity": 9938
                    },
                    {
                        "ability": 20,
                        "quantity": 28
                    },
                    {
                        "ability": 17,
                        "quantity": 20
                    },
                    {
                        "ability": 13,
                        "quantity": 4
                    },
                    {
                        "ability": 23,
                        "quantity": 30
                    },
                    {
                        "ability": 24,
                        "quantity": 26
                    },
                    {
                        "ability": 14,
                        "quantity": 15
                    },
                    {
                        "ability": 18,
                        "quantity": 2
                    },
                    {
                        "ability": 16,
                        "quantity": 6
                    },
                    {
                        "ability": 22,
                        "quantity": 1
                    },
                    {
                        "ability": 21,
                        "quantity": 1
                    }
                ]
                ,
                "boss_loot_drop_percentage": 0.25,
                "damage_multiplier_dps": 1,
                "damage_per_click_multiplier": 91111137,
                "max_hp": 1211137299.9995723,
                "dps": 0
            }
        }
    },
    "GetGameData": {
        "response": {
            "game_data": {
                "level": 312855,
                "lanes": [
                    {
                        "enemies": [
                            {
                                "id": "3754261",
                                "type": 0,
                                "hp": 0,
                                "max_hp": 13801931825421,
                                "dps": 4912738,
                                "timer": 0.20000000000000001,
                                "gold": 185956370
                            },
                            {
                                "id": "3754262",
                                "type": 1,
                                "hp": 0,
                                "max_hp": 3977963392037,
                                "dps": 3930190,
                                "gold": 14559196
                            },
                            {
                                "id": "3754263",
                                "type": 1,
                                "hp": 0,
                                "max_hp": 3475609243025,
                                "dps": 3930190,
                                "gold": 14559196
                            },
                            {
                                "id": "3754264",
                                "type": 1,
                                "hp": 0,
                                "max_hp": 1228255050856,
                                "dps": 3930190,
                                "gold": 14559196
                            }
                        ]
                        ,
                        "dps": 0,
                        "active_player_abilities": [
                            {
                                "accountid_caster": 123456,
                                "ability": 7,
                                "timestamp_done": 1434813092,
                                "multiplier": 0.10000000149011612
                            }
                        ]
                        ,
                        "player_hp_buckets": [
                            34,
                            0,
                            0,
                            0,
                            0,
                            0,
                            3,
                            3,
                            7,
                            446
                        ]
                        ,
                        "element": 4,
                        "active_player_ability_decrease_cooldowns": 0.25,
                        "active_player_ability_gold_per_click": 0.0099999997764825821
                    },
                    {
                        "enemies": [
                            {
                                "id": "3754265",
                                "type": 0,
                                "hp": 0,
                                "max_hp": 13801931825421,
                                "dps": 4912738,
                                "timer": 0.10000000000000001,
                                "gold": 185956370
                            },
                            {
                                "id": "3754266",
                                "type": 1,
                                "hp": 0,
                                "max_hp": 2695187723636,
                                "dps": 3930190,
                                "gold": 14559196
                            },
                            {
                                "id": "3754267",
                                "type": 1,
                                "hp": 0,
                                "max_hp": 2412853826838,
                                "dps": 3930190,
                                "gold": 14559196
                            },
                            {
                                "id": "3754268",
                                "type": 1,
                                "hp": 0,
                                "max_hp": 1511391827860,
                                "dps": 3930190,
                                "gold": 14559196
                            }
                        ]
                        ,
                        "dps": 0,
                        "active_player_abilities": [
                            {
                                "accountid_caster": 123456,
                                "ability": 8,
                                "timestamp_done": 1434813100,
                                "multiplier": 0.10000000149011612
                            }
                        ]
                        ,
                        "player_hp_buckets": [
                            38,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            3,
                            505
                        ]
                        ,
                        "element": 1,
                        "active_player_ability_decrease_cooldowns": 0.25,
                        "active_player_ability_gold_per_click": 0.039999999105930328
                    },
                    {
                        "enemies": [
                            {
                                "id": "3754269",
                                "type": 0,
                                "hp": 0,
                                "max_hp": 13801931825421,
                                "dps": 4912738,
                                "timer": 0.30000000000000004,
                                "gold": 185956370
                            },
                            {
                                "id": "3754270",
                                "type": 1,
                                "hp": 2480769858560.5,
                                "max_hp": 3218744454124,
                                "dps": 3930190,
                                "gold": 14559196
                            },
                            {
                                "id": "3754271",
                                "type": 1,
                                "hp": 0,
                                "max_hp": 3754152379298,
                                "dps": 3930190,
                                "gold": 14559196
                            },
                            {
                                "id": "3754272",
                                "type": 1,
                                "hp": 0,
                                "max_hp": 2171241366184,
                                "dps": 3930190,
                                "gold": 14559196
                            }
                        ]
                        ,
                        "dps": 1670330.8,
                        "active_player_abilities": [
                            {
                                "accountid_caster": 123456,
                                "ability": 8,
                                "timestamp_done": 1434813094,
                                "multiplier": 0.10000000149011612
                            }
                        ]
                        ,
                        "player_hp_buckets": [
                            48,
                            0,
                            2,
                            1,
                            3,
                            2,
                            13,
                            8,
                            17,
                            364
                        ]
                        ,
                        "element": 2,
                        "active_player_ability_decrease_cooldowns": 0.25,
                        "active_player_ability_gold_per_click": 0
                    }
                ]
                ,
                "timestamp": 1434813089,
                "status": 2,
                "timestamp_game_start": 1434729756,
                "timestamp_level_start": 1434813089
            },
            "stats": {
                "num_players": 1498,
                "num_mobs_killed": "275562",
                "num_towers_killed": "92169",
                "num_minibosses_killed": "23664",
                "num_bosses_killed": "3944",
                "num_clicks": "22394018",
                "num_abilities_activated": "412689",
                "num_players_reaching_milestone_level": "990",
                "num_ability_items_activated": "434555",
                "num_active_players": 65,
                "time_simulating": 4.8400472663092744,
                "time_saving": 258.79440280451985
            }
        }
    }
}

window.CServerInterface = function( builder )
{
	// Get token

	this.m_strSteamID = false;

	this.m_nLastTick = false
	this.m_bRequestUpdates = false;
	this.m_protobufMessageBuilder = builder;
	this.m_protobuf_GetGameDataResponse = builder.build( "CTowerAttack_GetGameData_Response" );
	this.m_protobuf_GetPlayerNamesResponse = builder.build( "CTowerAttack_GetPlayerNames_Response" );
	this.m_protobuf_GetPlayerDataResponse = builder.build( "CTowerAttack_GetPlayerData_Response" );
	this.m_protobuf_UseAbilitiesResponse = builder.build( "CTowerAttack_UseAbilities_Response" );
	this.m_protobuf_ChooseUpgradeResponse = builder.build( "CTowerAttack_ChooseUpgrade_Response" );
	this.m_protobuf_UseBadgePointsResponse = builder.build( "CTowerAttack_UseBadgePoints_Response" );

	var instance = this;

	this.m_WebAPI = false;//new CWebAPI( rgResult.webapi_host, rgResult.webapi_host_secure, rgResult.token );


}

CServerInterface.prototype.Connect = function( callback )
{
	var instance = this;
    var rgResult = {
        "webapi_host":"http:\/\/localhost:8000\/",
        "webapi_host_secure":"https:\/\/localhost:8000\/",
        "token":"token_000000",
        "steamid":"steamid_0000000",
        "persona_name": "Player",
        "success":1
    };

    instance.m_strSteamID = rgResult.steamid;
    instance.m_strWebAPIHost = rgResult.webapi_host;
    instance.m_WebAPI = new CWebAPI( rgResult.webapi_host, rgResult.webapi_host_secure, rgResult.token );
    callback(rgResult);

}


CServerInterface.prototype.GetGameTuningData = function( callback )
{
	var rgParams = {
		game_type: 1,
		gameid: this.m_nGameID
	};

	var instance = this;

	this.m_WebAPI.ExecJSONP( 'ITowerAttackMiniGameService', 'GetTuningData',  rgParams, true, null, 15 )
		.done( callback )
		.fail( function(err)
		{
			console.log("FAILED");
			console.log(err);
			g_bHalt = true;
		});

}

CServerInterface.prototype.GetGameData = function( callback, error, bIncludeStats )
{
	var rgParams = {
		gameid: this.m_nGameID,
		include_stats: ( bIncludeStats || g_IncludeGameStats ) ? 1 : 0,
		format: 'protobuf_raw'
	};

	var instance = this;

	/*$J.ajax({
		url: this.m_WebAPI.BuildURL( 'ITowerAttackMiniGameService', 'GetGameData', false ),
		data: rgParams,
		xhrFields : {
			responseType : 'arraybuffer'
		},
		dataType : 'native'
	}).success(function(rgResult){*/
		//var message = instance.m_protobuf_GetGameDataResponse.decode(rgResult);
		//var result = { 'response': message.toRaw( true, true ) };
        var result = API_JSON_STUBS['GetGameData']
		callback( result );
	/*} )
	.fail( error );*/
}

CServerInterface.prototype.GetPlayerNames = function( callback, error, rgAccountIDs )
{
	var rgParams = {
		gameid: this.m_nGameID,
		accountids: rgAccountIDs && rgAccountIDs.length < 100 ? rgAccountIDs : null,
	};

	var instance = this;

	var rgRequest = {
		'input_json': V_ToJSON( rgParams ),
		'format': "protobuf_raw",
	};

    var result = API_JSON_STUBS['GetPlayerNames']
    callback( result );
        
	/*$J.ajax({
		url: this.m_WebAPI.BuildURL( 'ITowerAttackMiniGameService', 'GetPlayerNames', false ),
		data: rgRequest,
		xhrFields : {
			responseType : 'arraybuffer'
		},
		dataType : 'native'
	}).success(function(rgResult){
		var message = instance.m_protobuf_GetPlayerNamesResponse.decode(rgResult);
		var result = { 'response': message.toRaw( true, true ) };
		callback( result );
	} )
	.fail( error );*/
}

CServerInterface.prototype.GetPlayerData = function( callback, error, bIncludeTechTree )
{
	var rgParams = {
		gameid: this.m_nGameID,
		steamid: g_steamID,
		include_tech_tree: (bIncludeTechTree) ? 1 : 0,
		format: 'protobuf_raw'
	};

	var instance = this;
    var result = API_JSON_STUBS['GetPlayerData']
    callback( result );
        
        /*
	$J.ajax({
		url: this.m_WebAPI.BuildURL( 'ITowerAttackMiniGameService', 'GetPlayerData', false ),
		data: rgParams,
		xhrFields : {
			responseType : 'arraybuffer'
		},
		dataType : 'native'
	}).success(function(rgResult){
		var message = instance.m_protobuf_GetPlayerDataResponse.decode(rgResult);
		var result = { 'response': message.toRaw( true, true ) };
		callback( result );
	} )
	.fail( error );*/
}

CServerInterface.prototype.UseAbilities = function( callback, failed, rgParams )
{
	rgParams["gameid"] = this.m_nGameID;

	var instance = this;

	var rgRequest = {
		'input_json': V_ToJSON( rgParams ),
		'access_token': instance.m_WebAPI.m_strOAuth2Token,
		'format': "protobuf_raw",
	};

	$J.ajax({
		url: this.m_WebAPI.BuildURL( 'ITowerAttackMiniGameService', 'UseAbilities', true ),
		method: 'POST',
		data: rgRequest,
		xhrFields : {
			responseType : 'arraybuffer'
		},
		dataType : 'native'
	}).success(function(rgResult){
		var message = instance.m_protobuf_UseAbilitiesResponse.decode(rgResult);
		var result = { 'response': message.toRaw( true, true ) };
		if ( result.response.player_data )
		{
			result.response.player_data.active_abilities_bitfield = result.response.player_data.active_abilities_bitfield ? parseInt( result.response.player_data.active_abilities_bitfield ) : 0;
		}
		if ( result.response.tech_tree )
		{
			result.response.tech_tree.unlocked_abilities_bitfield = result.response.tech_tree.unlocked_abilities_bitfield ? parseInt( result.response.tech_tree.unlocked_abilities_bitfield ) : 0;
		}
		callback( result );
	} )
	.fail( failed );
}

CServerInterface.prototype.ChooseUpgrades = function( callback, upgrades )
{
	var rgParams = {
		'gameid': this.m_nGameID,
		'upgrades': upgrades
	};

	var instance = this;

	var rgRequest = {
		'input_json': V_ToJSON( rgParams ),
		'access_token': instance.m_WebAPI.m_strOAuth2Token,
		'format': "protobuf_raw"
	};

	$J.ajax({
		url: this.m_WebAPI.BuildURL( 'ITowerAttackMiniGameService', 'ChooseUpgrade', true ),
		method: 'POST',
		data: rgRequest,
		xhrFields : {
			responseType : 'arraybuffer'
		},
		dataType : 'native'
	}).success(function(rgResult){
		var message = instance.m_protobuf_ChooseUpgradeResponse.decode(rgResult);
		var result = { 'response': message.toRaw( true, true ) };
		if ( result.response.tech_tree )
		{
			result.response.tech_tree.unlocked_abilities_bitfield = result.response.tech_tree.unlocked_abilities_bitfield ? parseInt( result.response.tech_tree.unlocked_abilities_bitfield ) : 0;
		}
		callback( result );
	} )
	.fail( function(err)
	{
		console.log("FAILED");
		console.log(err);
	});
}

CServerInterface.prototype.UseBadgePoints = function( callback, abilityItems )
{
	var rgParams = {
		'gameid': this.m_nGameID,
		'ability_items': abilityItems
	};

	var instance = this;

	var rgRequest = {
		'input_json': V_ToJSON( rgParams ),
		'access_token': instance.m_WebAPI.m_strOAuth2Token,
		'format': "protobuf_raw"
	};

	$J.ajax({
		url: this.m_WebAPI.BuildURL( 'ITowerAttackMiniGameService', 'UseBadgePoints', true ),
		method: 'POST',
		data: rgRequest,
		xhrFields : {
			responseType : 'arraybuffer'
		},
		dataType : 'native'
	}).success(function(rgResult){
		var message = instance.m_protobuf_UseBadgePointsResponse.decode(rgResult);
		var result = { 'response': message.toRaw( true, true ) };
		if ( result.response.tech_tree )
		{
			result.response.tech_tree.unlocked_abilities_bitfield = result.response.tech_tree.unlocked_abilities_bitfield ? parseInt( result.response.tech_tree.unlocked_abilities_bitfield ) : 0;
		}
		callback( result );
	} )
	.fail( function(err)
	{
		console.log("FAILED");
		console.log(err);
	});
}

CServerInterface.prototype.QuitGame = function( callback )
{
	var rgParams = {
		'gameid': this.m_nGameID,
	};


	var instance = this;

	var rgRequest = {
		'input_json': V_ToJSON( rgParams )
	};

	this.m_WebAPI.ExecJSONP( 'IMiniGameService', 'LeaveGame',  rgRequest, true, null )
		.done( callback )
		.fail( function(err)
		{
			console.log("FAILED");
			console.log(err);
		});

}