module.exports = {
  onPreBuild: async ({ utils: { build, run } }) => {
    try {
      await run.command('npm install --location=global pnpm')
      await run.command('pnpm install --frozen-lockfile=false')
    } catch (error) {
      return build.failBuild(error)
    }
  },
}
