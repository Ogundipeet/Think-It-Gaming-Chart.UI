/* eslint-disable no-unused-expressions */
import { GamingChartComponent } from './gaming-chart.component';

describe('GamingChartComponent', () => {
  let component: GamingChartComponent;
  let GAMES: any[];
  let mockGamingChartService;

  beforeEach(() => {
    GAMES = [
      {
        userId: 88,
        game: 'The Witcher 3: Wild Hunt',
        playTime: 9,
        genre: 'RPG',
        platforms: ['PC', 'PS4', 'Xbox One', 'Nintendo Switch'],
      },
      {
        userId: 1,
        game: 'The last of us 2',
        playTime: 100,
        genre: 'FPS',
        platforms: ['PS4', 'PC'],
      },
      {
        userId: 7,
        game: 'Hitman 3',
        playTime: 60,
        genre: 'Stealth',
        platforms: ['PS4', 'PS5', 'Xbox One', 'Nintendo Switch', 'PC'],
      },
      {
        userId: 99,
        game: 'Minecraft',
        playTime: 1002,
        genre: 'Sandbox',
        platforms: ['PC'],
      },
    ];
    mockGamingChartService = jasmine.createSpyObj([
      'getTopPlaytimeByUserId',
      'getTopPlaytimeByPlaytime',
    ]);
    component = new GamingChartComponent(mockGamingChartService);
  });

  describe('getTotalPlaytimeByUserId', () => {
    it('should get top games by playtime when right userId is passed', () => {
      component.getTotalPlaytimeByUserId(1);
      expect(GAMES[1]).toEqual(GAMES.find((x) => x.userId === 1));
    });
  });

  describe('getTotalPlaytimeByUserId', () => {
    it('should return undefined when userId passed is not in games', () => {
      component.getTotalPlaytimeByUserId(2);
      expect(GAMES.find((x) => x.userId === 2)).toBeUndefined();
    });
  });

  describe('getTopGameByTotalPlaytime', () => {
    it('should return games if no parameter is passed', () => {
      component.getTopGameByTotalPlaytime();
      expect(GAMES.values());
    });
  });

  describe('getTopGameByTotalPlaytime', () => {
    it('should return games if valid minPlaytime parameter is passed', () => {
      component.getTopGameByTotalPlaytime(8);
      expect(GAMES.filter((x) => x.playTime >= 8));
    });
  });

  describe('getTopGameByTotalPlaytime', () => {
    it('should return undefined if invalid maxPlaytime parameter is passed', () => {
      component.getTopGameByTotalPlaytime(5);
      expect(GAMES.filter((x) => x.playTime <= 5)).toBeUndefined;
    });
  });

  describe('getTopGameByTotalPlaytime', () => {
    it('should return games if valid maxPlaytime parameter is passed', () => {
      component.getTopGameByTotalPlaytime(100);
      expect(GAMES.filter((x) => x.playTime <= 100));
    });
  });

  describe('getTopGameByTotalPlaytime', () => {
    it('should return undefined if invalid minPlaytime parameter is passed', () => {
      component.getTopGameByTotalPlaytime(2000);
      expect(GAMES.filter((x) => x.playTime >= 2000)).toBeUndefined;
    });
  });

  describe('getTopGameByTotalPlaytime', () => {
    it('should return games if valid minPlaytime and maxPlaytime parameter is passed', () => {
      component.getTopGameByTotalPlaytime(100);
      expect(GAMES.filter((x) => x.playTime >= 8 && x.playTime <= 100));
    });
  });

  describe('getTopGameByTotalPlaytime', () => {
    it('should return undefined if invalid minPlaytime and valid maxPlaytime parameter is passed', () => {
      component.getTopGameByTotalPlaytime(100);
      expect(GAMES.filter((x) => x.playTime >= 2000 && x.playTime <= 100))
        .toBeUndefined;
    });
  });

  describe('getTopGameByTotalPlaytime', () => {
    it('should return undefined if valid minPlaytime and invalid maxPlaytime parameter is passed', () => {
      component.getTopGameByTotalPlaytime(100);
      expect(GAMES.filter((x) => x.playTime >= 9 && x.playTime <= 2))
        .toBeUndefined;
    });
  });
});
