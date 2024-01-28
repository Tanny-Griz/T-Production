import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {paths, mode, isDev} = options

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js', // solve problem with cash
			path: paths.build,
			clean: true // clear extra dist->main files
		},
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		plugins: buildPlugins(options),
		devtool: isDev ? 'inline-source-map' : undefined, // without source-map in production
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}