import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'

export default defineConfig({
   input : 'src/index.ts',
    output : {
        dir : 'dist',
        format : 'es',
        name : 'scroll-set'
    },
    external:['react','react-dom'],
    plugins: [
        typescript({tsconfing:'tsconfig.json'}),
        postcss({
            extract: true,
            modules: false,
            minimize: true,
        })
    ]
})