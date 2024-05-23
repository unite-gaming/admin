import {
    IUser,
    IGameData,
    IOperator,
    IPlans,
} from '@interfaces';

import usersData from './fakeUsers.json';
import gamesData from './fakeGames.json';
import operatorsData from './fakeOperators.json';
import plansData from './fakePlans.json';

const typedUsersData = usersData as IUser[];
const typedGamesData = gamesData as IGameData[];
const typedOperatorsData = operatorsData as IOperator[];
const typedPlansData = plansData as IPlans[];

export {default as text} from './text.json';
export {typedUsersData as usersData};
export {typedGamesData as gamesData};
export {typedOperatorsData as operatorsData};
export {typedPlansData as plansData};
