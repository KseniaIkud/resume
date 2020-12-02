function importAll(r) {
  r.keys().forEach(r)
}

importAll(require.context('./', true, /\.(ts|scss)$/))
import ('./demo/demo')

