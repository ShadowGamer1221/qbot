import { BotConfig } from './structures/types'; 

export const config: BotConfig = {
    groupId: 14113482,
    slashCommands: true,
    legacyCommands: {
        enabled: true,
        prefixes: ['!!'],
    },
    permissions: {
        all: ['945362316633993226', '945362317464444928'],
        ranking: ['945388991463686174'],
        users: [''],
        verified: ['945363366334070855'],
        shout: ['945388997260243003'],
        join: ['945404307753304185'],
        signal: ['945362316633993226', '945362317464444928'],
        admin: ['945364791965405284', '945364783505502291'],
    },
    logChannels: {
        actions: '945399410777550968',
        shout: '',
    },
    database: {
        enabled: true,
        type: 'mongodb',
    },
    api: true,
    maximumRank: 102,
    verificationChecks: true,
    firedRank: 1,
    suspendedRank: 2,
    inactiveRank: 1,
    recordManualActions: true,
    memberCount: {
        enabled: true,
        channelId: '945397279043497994',
        milestone: 100,
        onlyMilestones: false,
    },
     xpSystem: {
        enabled: true,
        autoRankup: false,
        roles: [
            
            {
                rank: 18,
                xp: 10000,
            },
            {
                rank: 17,
                xp: 9000,
            },
            {
                rank: 16,
                xp: 8000,
            },
            {
                rank: 15,
                xp: 7000,
            },
            {
                rank: 14,
                xp: 6000,
            },
            {
                rank: 13,
                xp: 5000,
            },
            {
                rank: 12,
                xp: 3000,
            },
            {
                rank: 11,
                xp: 2000,
            },
            {
                rank: 10,
                xp: 1500,
            },
            {
                rank: 9,
                xp: 900,
            },
            {
                rank: 8,
                xp: 500,
            },
            {
                rank: 7,
                xp: 200,
            },
            {
                rank: 6,
                xp: 100,
            },
            
        ],
    },
    requestChannel: '945383871992692796',
    antiAbuse: {
        enabled: true,
        clearDuration: 1 * 60,
        threshold: 5,
        demotionRank: 3,
        bypassRoleId: '862434154033315881',
    },
    activity: {
        enabled: true,
        type: 'STREAMING',
        url: 'https://twitch.tv/lost_shadow_gamer',
        value: 'promotions | !!help, /help',
    },
    status: 'dnd',
    deleteWallURLs: true,
}
