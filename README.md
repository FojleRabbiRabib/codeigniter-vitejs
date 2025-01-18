<div align="center">
	<img width="160px" src="src/logo.png">
  	<h1>Codeigniter + viteJs</h1>
  	<p>Vitejs Integration For CodeIgniter4 Framework</p>
	<p>
		<a href="https://github.com/FojleRabbiRabib/codeigniter-vitejs/releases">
			<img src="https://custom-icon-badges.herokuapp.com/github/v/release/fojlerabbirabib/codeigniter-vitejs?logo=tag">
		</a>
		<a href="https://github.com/vitejs/awesome-vite#codeigniter">
			<img src="https://awesome.re/mentioned-badge.svg">
		</a>
		<img src="https://custom-icon-badges.herokuapp.com/packagist/stars/fojlerabbirabib/codeignitervite?logo=star">
		<a href="https://packagist.org/packages/fojlerabbirabib/codeignitervite">
			<img src="https://badges.hiptest.com:/packagist/dt/fojlerabbirabib/codeignitervite?color=%23c700ff&logo=packagist&logoColor=%23c700ff">
		</a>
		<a href="LICENSE">
			<img src="https://custom-icon-badges.herokuapp.com/packagist/l/fojlerabbirabib/codeignitervite?logo=law">
		</a>
	</p>
</div>

Codeigniter vite is a package that aims to integrate [vitejs](https://vitejs.dev/) with [codeigniter4](https://codeigniter.com/) in a simple way.

## Features:

- ⏱️ Almost zero configuration
- 🧩 Easy to install and remove
- 🔨 Easy to customize
- ✌️ Support most used frameworks: `react`, `react-ts` (check [react-ts](https://github.com/FojleRabbiRabib/codeigniter-vitejs/tree/react-ts), `vue`, and `svlete`. (check [v2](https://github.com/FojleRabbiRabib/codeigniter-vitejs/tree/v2) for SvelteKit support)
- 🔥 Enjoy hot module replacement (HMR)

## Installation:

```
composer require fojlerabbirabib/codeigniter-vite
```

then from your project root, run:

```
php spark vite:init --framework <framework>
```

replace `<framework>` with `vue`, `react`, `react-ts`, `svelte`, or `none`

or you can just run:

```
php spark vite:init
```

our buddy `spark` will handle the rest for you 🙃

## Getting Started:

- Install your node dependencies: `npm install`
- Start vite server: `npm run dev`
- Start CI server: `php spark serve` or access it through your virtual host.
- That's all =)

> **NOTE:**
>
> `npm run dev` is not where you should work, it main purpose is to serve assets, such as scripts or stylesheets.
> once you build your files, it becomes useless
> but as long as it running, the package will use it instead of the bundled files.
> So make sure to **access your project** from ci server or a vitual host.

## Build your files:

to bundle your files, run:

```
npm run build
```

this command will generate the bundled assets in your public directory.
but as we said before, as long as vite server is running, the package will use it instead of bundled files, so make sure to stop it when you're done developing.

## Uninitialize:

`composer remove fojlerabbirabib/codeigniter-vite` command will remove the package, but the generated files will remain there (package.json, vite.config.js ...etc).
so to avoid that, make sure to run the following command first:

```
php spark vite:remove
```

This command will do the following:

- delete `package.json`, `packages.lock.json` and `vite.config.js`.
- delete `resources` folder.
- And finally restore your `.env` file.

## 🔥 Need a quick start?

Check out our starter apps for [svelte](https://github.com/mihatorikei/ci-svelte-appstarter) and [vue](https://github.com/mihatorikei/ci-vue-appstarter).

<a href="https://github.com/mihatorikei/ci-svelte-appstarter">
	<img width="120px" src="https://github.com/mihatorikei/ci-svelte-appstarter/raw/master/ci-svelte.webp">
</a>
<a href="https://github.com/mihatorikei/ci-vue-appstarter">
	<img width="120px" src="https://github.com/mihatorikei/ci-vue-appstarter/raw/master/ci-vue.webp">
</a>

## Contributing

All contributions are welcome, it doesn't matter whether you can code, write documentation, or help find bugs.
feel free to use issues or pull requests.

## Credits

- **Source Repository**: [codeigniter-vitejs](https://github.com/mihatorikei/codeigniter-vitejs)
- **Author**: [Mihato Rikei](https://github.com/mihatorikei)

## Support

Unfortunately, I don't drink coffee 💔, but you can give a ⭐ to me and the [source repository](https://github.com/mihatorikei/codeigniter-vitejs) instead 🙃. 

## License

MIT License &copy; 2025 [Fojle Rabbi Rabib](https://github.com/FojleRabbiRabib)
