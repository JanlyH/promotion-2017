// import Hello from 'components/Hello';
export default {
    path: '/',
    name: 'Hello',
    component: resolve => {
        require.ensure([], () => {
            
        }, 'index')
    }
}