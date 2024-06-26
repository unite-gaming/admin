import {
    IUser,
    IGameData,
    IOperator,
    IPlan,
    IPromo,
    ILog,
    IProduct,
} from '@interfaces';

import usersData from './fakeUsers.json';
import gamesData from './fakeGames.json';
import operatorsData from './fakeOperators.json';
import plansData from './fakePlans.json';
import promosData from './fakePromos.json';
import logsData from './fakeLogs.json';
import productsData from './fakeProducts.json';

const typedUsersData = usersData as IUser[];
const typedGamesData = gamesData as IGameData[];
const typedOperatorsData = operatorsData as IOperator[];
const typedPlansData = plansData as IPlan[];
const typedPromosData = promosData as IPromo[];
const typedLogsData = logsData as ILog[];
const typedProductsData = productsData as IProduct[];

export {default as text} from './text.json';
export {typedUsersData as usersData};
export {typedGamesData as gamesData};
export {typedOperatorsData as operatorsData};
export {typedPlansData as plansData};
export {typedPromosData as promosData};
export {typedLogsData as logsData};
export {typedProductsData as productsData};
