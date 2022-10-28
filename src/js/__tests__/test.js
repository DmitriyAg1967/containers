import Character from '../app';
import { Team } from '../app';


test('Не верное имя', () => {
  expect(() => new Character('Bowerman1111')).toThrow();
});

test('Создание команды', () => {
  const reference = { name: 'Max', members: new Set() };
  const result = new Team('Max');
  expect(reference).toEqual(result);
})

test('Добавление с помощью мнтода add', () => {
  const team = new Team('Max');
  const unit = new Character('warrior');
  team.add(unit);
  const result = {
    name: 'Max',
    members: new Set([{
      name: 'warrior',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
})

test('Ошибка при дублировании члена команды', () => {
  const team = new Team('Max');
  const unit = new Character('warrior');
  team.add(unit);
  expect(() => team.add(unit)).toThrow(new Error('Такой персонаж уже есть'));
})

test('Добавление новых игрокоd методом addAll', () => {
  const team = new Team('Max');
  const unit1 = new Character('warrior1');
  const unit2 = new Character('warrior2');
  const unit3 = new Character('warrior3');
  team.addAll(unit1, unit2, unit3);
  const result = {
    name: 'Max',
    members: new Set([{
      name: 'warrior1',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior2',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior3',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('Добавление новых игрокоd методом addAll без задвоения', () => {
  const team = new Team('Max');
  const unit1 = new Character('warrior1');
  const unit2 = new Character('warrior2');
  const unit3 = new Character('warrior3');
  team.addAll(unit1, unit2, unit3, unit2, unit3);
  const result = {
    name: 'Max',
    members: new Set([{
      name: 'warrior1',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior2',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior3',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('конвертация в массив', () => {
  const team = new Team('Max');
  const unit1 = new Character('warrior1');
  const unit2 = new Character('warrior2');
  const unit3 = new Character('warrior3');
  team.addAll(unit1, unit2, unit3);
  const result = [
    {
      name: 'warrior1',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior2',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior3',
      level: 1,
      health: 100,
    }];
  expect(team.toArray()).toEqual(result);
});
