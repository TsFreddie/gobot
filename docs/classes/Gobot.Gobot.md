[Gobot](../modules/Gobot.md).Gobot

Generic Gobot plugin. Subclass this for specific functionality.

## Table of contents

### Constructors

- [constructor](Gobot.Gobot.md#constructor)

### Properties

- [arch](Gobot.Gobot.md#arch)
- [cacheRoot](Gobot.Gobot.md#cacheroot)
- [env](Gobot.Gobot.md#env)
- [os](Gobot.Gobot.md#os)
- [releaseProvider](Gobot.Gobot.md#releaseprovider)
- [repo](Gobot.Gobot.md#repo)
- [storedReleases](Gobot.Gobot.md#storedreleases)
- [version](Gobot.Gobot.md#version)

### Accessors

- [binName](Gobot.Gobot.md#binname)
- [name](Gobot.Gobot.md#name)
- [slug](Gobot.Gobot.md#slug)

### Methods

- [cachePath](Gobot.Gobot.md#cachepath)
- [clearCache](Gobot.Gobot.md#clearcache)
- [compare](Gobot.Gobot.md#compare)
- [download](Gobot.Gobot.md#download)
- [downloadPath](Gobot.Gobot.md#downloadpath)
- [downloadRoot](Gobot.Gobot.md#downloadroot)
- [filterArgs](Gobot.Gobot.md#filterargs)
- [findArchiveBinPath](Gobot.Gobot.md#findarchivebinpath)
- [getBinaryPath](Gobot.Gobot.md#getbinarypath)
- [getLatestVersion](Gobot.Gobot.md#getlatestversion)
- [getSatisfyingVersions](Gobot.Gobot.md#getsatisfyingversions)
- [maxSatisfyingRelease](Gobot.Gobot.md#maxsatisfyingrelease)
- [maxSatisfyingVersion](Gobot.Gobot.md#maxsatisfyingversion)
- [releases](Gobot.Gobot.md#releases)
- [run](Gobot.Gobot.md#run)
- [satisfies](Gobot.Gobot.md#satisfies)
- [unpack](Gobot.Gobot.md#unpack)
- [versions](Gobot.Gobot.md#versions)

## Constructors

### constructor

• **new Gobot**(`repo`, `releaseProviderFactory`, `optionsIn?`): [`Gobot`](Gobot.Gobot.md)

Create a new Gobot

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repo` | `string` | The repo name, in `<user>/<repo>` format. |
| `releaseProviderFactory` | (`cacheRoot`: `string`) => `GithubReleaseProvider` | - |
| `optionsIn` | `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\> | Option overrides |

#### Returns

[`Gobot`](Gobot.Gobot.md)

#### Defined in

[Gobot.ts:88](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L88)

## Properties

### arch

• `Protected` **arch**: `Architecture`

#### Defined in

[Gobot.ts:75](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L75)

___

### cacheRoot

• `Protected` **cacheRoot**: `string`

#### Defined in

[Gobot.ts:78](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L78)

___

### env

• `Protected` **env**: `ProcessEnv`

#### Defined in

[Gobot.ts:77](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L77)

___

### os

• `Protected` **os**: `Platform`

#### Defined in

[Gobot.ts:74](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L74)

___

### releaseProvider

• `Protected` **releaseProvider**: `GithubReleaseProvider`

#### Defined in

[Gobot.ts:80](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L80)

___

### repo

• `Protected` **repo**: `string`

#### Defined in

[Gobot.ts:73](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L73)

___

### storedReleases

• **storedReleases**: `undefined` \| [`StoredRelease`](../modules/Gobot.md#storedrelease)[] = `undefined`

#### Defined in

[Gobot.ts:79](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L79)

___

### version

• `Protected` **version**: `string`

#### Defined in

[Gobot.ts:76](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L76)

## Accessors

### binName

• `get` **binName**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:182](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L182)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:125](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L125)

___

### slug

• `get` **slug**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:121](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L121)

## Methods

### cachePath

▸ **cachePath**(`...paths`): (...`paths`: `string`[]) => `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`fn`

▸ (`...paths`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

##### Returns

`string`

#### Defined in

[Gobot.ts:129](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L129)

___

### clearCache

▸ **clearCache**(): `void`

Clear all items from cache (flush cache).

#### Returns

`void`

#### Defined in

[Gobot.ts:138](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L138)

___

### compare

▸ **compare**(`a`, `b`): ``-1`` \| ``0`` \| ``1``

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |

#### Returns

``-1`` \| ``0`` \| ``1``

#### Defined in

[Gobot.ts:263](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L263)

___

### download

▸ **download**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:143](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L143)

___

### downloadPath

▸ **downloadPath**(`version`, `url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[Gobot.ts:208](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L208)

___

### downloadRoot

▸ **downloadRoot**(`version`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |

#### Returns

`string`

#### Defined in

[Gobot.ts:197](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L197)

___

### filterArgs

▸ **filterArgs**(`args`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string`[] |

#### Returns

`string`[]

#### Defined in

[Gobot.ts:340](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L340)

___

### findArchiveBinPath

▸ **findArchiveBinPath**(`version`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:188](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L188)

___

### getBinaryPath

▸ **getBinaryPath**(`versionRangeIn?`): `Promise`\<`undefined` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `versionRangeIn?` | `string` |

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Defined in

[Gobot.ts:221](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L221)

___

### getLatestVersion

▸ **getLatestVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:276](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L276)

___

### getSatisfyingVersions

▸ **getSatisfyingVersions**(`range`): `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[Gobot.ts:271](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L271)

___

### maxSatisfyingRelease

▸ **maxSatisfyingRelease**(`range`): `Promise`\<`undefined` \| [`StoredRelease`](../modules/Gobot.md#storedrelease)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | `string` |

#### Returns

`Promise`\<`undefined` \| [`StoredRelease`](../modules/Gobot.md#storedrelease)\>

#### Defined in

[Gobot.ts:289](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L289)

___

### maxSatisfyingVersion

▸ **maxSatisfyingVersion**(`range`): `Promise`\<`undefined` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | `string` |

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Defined in

[Gobot.ts:281](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L281)

___

### releases

▸ **releases**(`force?`): `Promise`\<[`StoredRelease`](../modules/Gobot.md#storedrelease)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`StoredRelease`](../modules/Gobot.md#storedrelease)[]\>

#### Defined in

[Gobot.ts:298](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L298)

___

### run

▸ **run**(`args`): `Promise`\<`undefined` \| `ChildProcess`\>

Run a binary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `string`[] | The arguments to pass to `spawn()` |

#### Returns

`Promise`\<`undefined` \| `ChildProcess`\>

#### Defined in

[Gobot.ts:350](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L350)

___

### satisfies

▸ **satisfies**(`version`, `range`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |
| `range` | `string` |

#### Returns

`boolean`

#### Defined in

[Gobot.ts:267](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L267)

___

### unpack

▸ **unpack**(`downloadPath`, `version`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `downloadPath` | `string` |
| `version` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:214](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L214)

___

### versions

▸ **versions**(`type?`): `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | ``"js"`` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[Gobot.ts:157](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L157)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"json"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:158](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L158)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"txt"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:159](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L159)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"cjs"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:160](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L160)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"esm"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:161](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L161)
