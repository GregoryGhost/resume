import './index.styl';
import './index.pug';

function importStyles(context){
    context.keys().forEach(key => context(key));
}

importStyles(require.context('../../components/', true, /^\.\/.*\.styl$/));

if(module.hot){
    module.hot.accept();
}