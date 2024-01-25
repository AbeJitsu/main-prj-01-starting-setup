import mutations from './mutations.js';
import actions from './actions.js'; 
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            coaches: [
                // {
                //     id: 'c1',
                //     firstName: 'Abe',
                //     lastName: 'Reyes',
                //     areas: ['frontend', 'backend', 'techsupport'],
                //     description:
                //         "I'm Abe, a freelance web developer. Let me help you build your vision!",
                //     hourlyRate: 39
                // },
                // {
                //     id: 'c2',
                //     firstName: 'Andrea',
                //     lastName: 'Caputo',
                //     areas: ['techsupport'],
                //     description:
                //         'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                //     hourlyRate: 39
                // }
            ]
        }
    },
    mutations,
    actions,
    getters
};
