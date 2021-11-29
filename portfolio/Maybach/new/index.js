screenad.position("width=100%&height=250&hor=left&ver=banner&hide=false&sticky=false&offx=0&offy=0&cliprect=auto,auto,auto,auto&antizoom=false&smooth=1");
screenad.setZIndex(29);

(function (cjs, an) {
    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [
        {
            name: "index_atlas_NP_",
            frames: [
                [0, 322, 1464, 320],
                [0, 0, 1464, 320],
                [0, 644, 1464, 320],
                [0, 966, 64, 64],
            ],
        },
    ];

    // symbols:

    (lib.bg_1_100 = function () {
        this.initialize(ss["index_atlas_NP_"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();

    (lib.bg_2_100 = function () {
        this.initialize(ss["index_atlas_NP_"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();

    (lib.bg_3_100 = function () {
        this.initialize(ss["index_atlas_NP_"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();

    (lib.star_64 = function () {
        this.initialize(ss["index_atlas_NP_"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }

    (lib.Tween4123 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_2
        this.instance = new lib.star_64();
        this.instance.parent = this;
        this.instance.setTransform(-32, -32);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-32, -32, 64, 64);

    (lib.Tween5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ao3CbIAAk1IRvAAIAAE1g");
        this.shape.setTransform(0.0011, 0.0306);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56.8, -15.5, 113.6, 31.1);

    (lib.Symbol11123 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("EjDTATiMAAAgnDMGGnAAAMAAAAnDg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1250, -125, 2500, 250);

    (lib.Symbol9123 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().dr(-40, -32, 80, 64);
        this.shape.setTransform(0.0004, 0, 0.8, 6.25);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = getMCSymbolPrototype(lib.Symbol9123, new cjs.Rectangle(-32, -200, 64, 400), null);

    (lib.Symbol25 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.bg_2_100();
        this.instance.parent = this;
        this.instance.setTransform(-571.85, 0, 0.7813, 0.7813);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-571.8, 0, 1143.6999999999998, 250), null);

    (lib.Symbol24 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.bg_3_100();
        this.instance.parent = this;
        this.instance.setTransform(-571.85, 0, 0.7813, 0.7813);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-571.8, 0, 1143.6999999999998, 250), null);

    (lib.Symbol23 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.bg_1_100();
        this.instance.parent = this;
        this.instance.setTransform(-572, 0, 0.7813, 0.7813);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-572, 0, 1143.8, 250), null);

    (lib.Symbol22 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_2
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAhNZIgBgGQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgFgBIhGAAIgHABIgCACIgBAGIgEAAIABgIIAAgGIAAgGIgBgJIAEAAIABAGIACADIAHAAIAeAAIAAgfIgeAAIgHABIgCADIgBAFIgEAAIABgIIAAgGIAAgGIgBgIIAEAAIABAFIACADQACABAFgBIBGAAQADABACgBQABAAAAgBQAAAAABAAQAAAAAAgBQABAAAAgBIABgFIADAAIAAAIIAAAGIAAAGIAAAIIgDAAIgBgFIgDgDIgFgBIgjAAIAAAfIAjAAIAFAAQABAAAAgBQAAAAABAAQAAAAAAgBQABAAAAgBIABgGIADAAIAAAJIAAAGIAAAGIAAAIgAgQMGQgIgDgEgFQgFgFAAgHQAAgEABgDQACgEAEgDIAHgEIAKgDIAKgBQAMAAAHADQAJADAEAFQAFAFgBAGQABAHgFAFQgEAFgJADQgHADgLAAQgJAAgJgDgAgVLpQgIADAAAGQAAAGAIADQAJADAOAAQAQAAAIgDQAIgDAAgGQAAgFgIgDQgIgDgQAAQgPAAgIACgAAhLTQAAgFgBgCQgCgBgEAAIguAAQgFAAgBABQgCACAAAFIgDAAIAAgbIABgIIACgFIAFgFQAEgBAEAAQAGAAAEADQAEADABAFQABgHAEgEQAEgDAIAAQAKAAAEAGQAFAGAAALIAAAagAAGKwQgFADAAAGIAAAIIAZAAIAFgBQABgCAAgEQAAgGgEgEQgDgDgIAAQgHAAgEADgAgYKyQgDADAAAGIAAAGIAaAAIAAgIQAAgEgEgDQgDgDgHAAQgGAAgDADgAAhKaQAAgFgBgBQgCgCgEAAIgvAAQgEAAgCACQgCABABAFIgEAAIABgHIABgFIgBgGIgBgHIAEAAQgBAEACACQACABAEAAIASAAIAAgGQAAgKAEgGQAFgGAKAAQAHAAAFAEQAFADACAGIABAFIAAAHIAAAVgAADJ6QgDADAAAGIAAAFIAZAAIAGgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgGgEgDQgEgDgIAAQgIAAgFADgAAiJtQgBgEgBgCQgBgBgFAAIgvAAQgEAAgCABQgCACABAEIgEAAIABgHIABgFIgBgGIgBgHIAEAAQgBAFACACQACABAEAAIAvAAQAEAAACgBQABgCABgFIACAAIAAAHIAAAGIAAAFIAAAHgAAiJMQgBgFgBgBQgCgCgEAAIgvAAQgEAAgCACQgCABABAFIgEAAIABgHIABgFIgBgGIgBgHIAEAAQgBAEACACQACABAEAAIAlAAIgkgVIgBAAQgEAAgCABQgCACABAEIgEAAIABgHIABgGIgBgFIgBgHIAEAAQgBAFACABQACACAEAAIAvAAQAEAAACgCQABgBABgFIACAAIAAAHIAAAFIAAAGIAAAHIgCAAQgBgEgBgCQgBgBgFAAIgmAAIAlAVIABAAQAEAAACgBQACgCAAgEIACAAIAAAHIAAAGIAAAFIAAAHgAg/I6QAFgCAEgCQACgDAAgFQAAgEgCgDQgEgDgFgBIAAgEQAJABAGAEQAFAEAAAGQAAAHgFAEQgGAEgJABgAAhHsIAAgBIgBgFQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgFgBIhIgCQgEAAgCACQgCACAAAFIgEAAIAAgFIABgEIgBgFIAAgHIBHgVIhHgUIAAgIIABgEIgBgEIAAgFIAEAAIABAGQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAAAIAHABIBGgBIAFgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAIABgHIADAAIAAAJIAAAGIAAAHIAAAIIgDAAIgBgGIgDgDIgFgBIhIABIBSAYIAAADIhTAYIBJACIAFgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAIABgGIADAAIAAAGIAAAFIAAAFIAAAHgAgQGIQgIgDgEgFQgFgFAAgHQAAgKAJgFQAJgFAPgBIAAAiIALgBIAHgBIAGgCQAEgBACgDQADgDAAgEQAAgGgFgEQgFgDgJgBIAAgFQALABAHAGQAFAFAAAIQAAALgJAHQgKAGgRAAQgJAAgIgDgAgXFsQgGADAAAGQAAAFAGADQAHADANAAIAAgXQgNABgHACgAAiFWQgBgFgBgBQgBgCgFAAIgsAAIgIABQgCACABAEIAAAAIAAABIgDAAIgBgHIgBgFIgCgDIAIgBIAGgBQgGgBgDgEQgEgDAAgFQAAgEADgDQADgDAGAAQADAAABACQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABIgBADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAAIgBgBIgCAAIgBAAIgCABIgBACQAAAEAHADQAFACAMAAIAdAAQAEAAACgBQABgCABgEIACAAIAAAHIAAAFIAAAGIAAAHgAgQEkQgIgDgEgFQgFgFAAgHQAAgDABgDIAFgFIgHgDIAAgCIAYAAIAAADQgJABgGADQgEADAAAFQAAAGAJAEQAIADAPAAQAOAAAJgDQAHgDAAgHQAAgFgFgDQgFgDgJgBIAAgFQALABAHAFQAFAFAAAIQABAGgFAFQgEAGgIACQgIADgLAAQgJAAgJgDgAgQDxQgIgDgEgFQgFgFAAgHQAAgKAJgFQAJgGAPAAIAAAhIALAAIAHgBIAGgCQAEgCACgDQADgDAAgDQAAgGgFgEQgFgEgJgBIAAgEQALABAHAFQAFAFAAAJQAAALgJAGQgKAGgRAAQgJAAgIgCgAgXDVQgGADAAAFQAAAFAGADQAHADANABIAAgXQgNAAgHADgAgPC7QgIgDgEgFQgFgEAAgHQAAgEADgDQACgDAGgDIgZAAQgFAAgCACQgCABABAFIgDAAIgCgJIgCgJIBSAAIAHAAQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIACgFIACAAIACAJIABAHIgFABIgGAAQAGADADADQADADAAAFQAAAGgFAFQgFAFgHADQgIACgLAAQgJAAgIgCgAgTCeQgJADAAAGQAAAGAIADQAIADAOAAQAPAAAJgDQAHgDABgGQAAgGgIgDQgHgDgNAAQgRAAgIADgAgQB+QgIgDgEgFQgFgFAAgHQAAgKAJgFQAJgFAPgBIAAAiIALgBIAHgBIAGgCQAEgBACgDQADgDAAgEQAAgGgFgEQgFgDgJgBIAAgFQALABAHAGQAFAFAAAIQAAALgJAHQgKAGgRAAQgJAAgIgDgAgXBiQgGADAAAGQAAAFAGADQAHADANAAIAAgXQgNABgHACgAAOBJIAAgDQAJgBAFgEQAFgEAAgGQAAgFgEgDQgDgDgGAAQgEAAgDACQgDADgDAGIgGAIIgCAFIgGADIgHABQgIAAgFgFQgGgFAAgIIABgGIAEgFIgGgCIAAgCIAXAAIAAADQgJABgFACQgDADAAAFQgBAFAEADQADADAFAAQAEAAADgCQADgCADgHIAEgHIADgEQACgDAEgCQAEgCAEAAQAJABAGAFQAFAFAAAIQABAEgCAEQgCADgCADIAGADIAAACgAgFAdIAAgdIAFAAIAAAdgAAhgFIAAgBIgBgFQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgFgBIhIgCQgEAAgCACQgCACAAAFIgEAAIAAgFIABgEIgBgFIAAgHIBHgVIhHgUIAAgIIABgEIgBgEIAAgFIAEAAIABAGQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAAAIAHABIBGgBIAFgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAIABgHIADAAIAAAJIAAAGIAAAHIAAAIIgDAAIgBgGIgDgDIgFgBIhIABIBSAYIAAADIhTAYIBJACIAFgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAIABgGIADAAIAAAGIAAAFIAAAFIAAAHgAAJhoQgFgCgDgFIgDgJIgEgMIgKAAQgGAAgEADQgCACAAAEQAAAEACACQACADADAAIACAAIABAAIABAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIgBADQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgEgDQgEgCgCgEQgDgFAAgFQAAgFADgEQACgEAEgCIAGgCIAJgBIAdAAIAKgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgBIAAgCIADAAIABAEIAAADQAAAEgDACQgCACgHABQAHACADAEQACAEAAAFQAAAHgFAEQgFAFgIAAQgGAAgEgCgAAFh1QAEAFAJAAQAGAAADgDQAEgCAAgEQAAgFgFgDQgFgDgMAAIgKAAQABAKAFAFgAggiXIABgGIAAgGIAAgFIgBgHIAEAAIABAFIABABIABAAIADgBIAngLIgmgNIgDAAIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAIAAAFIgEAAIABgEIAAgFIAAgEIgBgGIAEAAQAAAEACACQABACAEABIBFAWQAIADAFAEQADAEAAAGIAAAAIAAABIgHAAIAAgBQAAgFgDgDQgDgEgGgCIgLgDIg4ARQgEABgBACQgCABABAEgAg5jSIgCgJIgCgIIAnAAQgFgDgDgDQgDgEAAgEQAAgGAFgFQAFgFAHgDQAJgCAJAAQALAAAHADQAJACAEAFQAFAFgBAGQAAAGgCADQgDAEgHACIAMAFIAAAEIhTAAQgFgBgCACQgCABABAFgAgcjwQAAAGAIADQAJAEAPAAIANgBIAJgDQAEgBACgDQACgCAAgDQgBgFgHgEQgJgDgQAAQgdAAAAAMgAAJkTQgFgCgDgFIgDgJIgEgMIgKAAQgGAAgEADQgCACAAAEQAAAEACACQACADADAAIACAAIABAAIABAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIgBADQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgEgDQgEgCgCgEQgDgFAAgFQAAgFADgEQACgEAEgCIAGgCIAJgBIAdAAIAKgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgBIAAgCIADAAIABAEIAAADQAAAEgDACQgCACgHABQAHACADAEQACAEAAAFQAAAHgFAEQgFAFgIAAQgGAAgEgCgAAFkgQAEAFAJAAQAGAAADgDQAEgCAAgEQAAgFgFgDQgFgDgMAAIgKAAQABAKAFAFgAgQlMQgIgDgEgFQgFgFAAgHQAAgDABgDIAFgFIgHgDIAAgCIAYAAIAAADQgJABgGADQgEADAAAFQAAAGAJAEQAIADAPAAQAOAAAJgDQAHgDAAgHQAAgFgFgDQgFgDgJgBIAAgFQALABAHAFQAFAFAAAIQABAGgFAFQgEAGgIACQgIADgLAAQgJAAgJgDgAAil5QgBgFgBgBQgCgCgEAAIhIAAQgFAAgCACQgCABABAFIgDAAIgCgJIgCgJIAmAAQgEgDgDgDQgDgEAAgFQAAgEADgEIAFgGIAHgCIAJAAIAjAAQAEAAACgCQABgBABgFIACAAIAAAHIAAAFIAAAGIAAAHIgCAAQgBgEgBgCQgCgBgEAAIgjAAQgJAAgEACQgEACAAAFQAAAEABACQACADADABIAEACIAHAAIAjAAQAEAAACgBQACgCAAgEIACAAIAAAHIAAAGIAAAFIAAAHgAAHnbIAAgDQANgCAGgFQAHgFAAgIQAAgHgGgFQgEgEgJAAIgIABQgEACgCADIgHAKIgKANQgDAFgFACQgFACgGAAQgLgBgHgGQgGgGgBgKQABgEABgEQACgEAEgDIgIgDIAAgCIAaAAIAAADQgLACgFAEQgGAEABAHQAAAGAEAEQAFAEAIAAIAHgBQADgCADgEIAIgLIAFgHIAEgEQAEgFAFgCQAEgCAGAAQAIAAAHADQAFADAEAFQAEAFgBAHQAAAGgBAEQgDAEgEAFIAJAEIAAACgAgFoSIAAgeIAFAAIAAAegAAho1IgBgGQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgFgBIhGAAIgHABIgCACIgBAGIgEAAIABgIIAAgGIAAgGIgBgIIAEAAIABAGIACACIAHABIAgAAIgkgaIgCgBIgCgBIgBACIgBAGIgEAAIABgHIAAgFIAAgGIgBgGIAEAAIABAGIACAEIAFADIAbAUIAtgZIAFgEIADgEIABgFIADAAIAAAIIAAAHIAAAHIAAAIIgDAAIAAgCIgBgEQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCABIgDABIglAUIAHAFIAeAAIAFgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAIABgGIADAAIAAAHIAAAHIAAAGIAAAIgAAap9QAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAAgCIADgCIAAgBIABAAQAAgDgFgCQgGgCgKgBIgTgCIgJAAQgFAAgBABQgCACAAAFIgDAAIAAgyIADAAQAAAEACACQABABAFAAIAuAAQAFAAABgBQABgCABgEIACAAIAAAGIAAAGIAAAGIAAAHIgCAAQgBgFgBgBQgBgCgFAAIgtAAIgGABQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIgBAHQAAAGABACQACABAGABIAHAAQAXABANAEQAMAEAAAIQAAAEgCACQgCACgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAAJrGQgFgCgDgEIgDgKIgEgLIgKAAQgGAAgEACQgCACAAAFQAAAEACACQACACADAAIACAAIABAAIABAAQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAIgBADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgEgBgEgCQgEgDgCgEQgDgEAAgFQAAgFADgEQACgEAEgDIAGgCIAJAAIAdAAIAKgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIAAgCIAAgBIADAAIABADIAAAEQAAAEgDACQgCACgHABQAHACADAEQACADAAAGQAAAHgFAEQgFAEgIAAQgGAAgEgCgAAFrSQAEAEAJAAQAGAAADgCQAEgDAAgEQAAgFgFgDQgFgCgMAAIgKAAQABAKAFAFgAgQr/QgIgDgEgFQgFgFAAgHQAAgDABgDIAFgFIgHgDIAAgCIAYAAIAAADQgJABgGADQgEADAAAFQAAAGAJAEQAIADAPAAQAOAAAJgDQAHgDAAgHQAAgFgFgDQgFgDgJgBIAAgFQALABAHAFQAFAFAAAIQABAGgFAFQgEAGgIACQgIADgLAAQgJAAgJgDgAgQsyQgIgDgEgFQgFgFAAgHQAAgEABgDIAFgFIgHgDIAAgCIAYAAIAAADQgJABgGAEQgEADAAAFQAAAGAJADQAIAEAPAAQAOAAAJgEQAHgDAAgGQAAgFgFgDQgFgDgJgBIAAgFQALABAHAFQAFAEAAAIQABAHgFAFQgEAFgIADQgIADgLAAQgJAAgJgDg"
            );
        this.shape.setTransform(4.1, 137.475);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-9.9, 48, 24.8, 178.6), null);

    (lib.Symbol16 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAxBVIgLAAIgMAAIgNABIAAgFQAHgBACgCQADgCAAgDIAAgEIgBgEIgHgcIgsAAIgHAYIgCAHIgBAFQAAAEAEABQADACAHABIAAAFIgLAAIgJgBIgIABIgKAAIAAgFQAGgBADgBQADgCACgDQACgEACgHIAtiUIAqCXIADAIQACADAEACIAJACIAAAFIgNgBgAAPAdIgRhIIgWBIIAnAAg"
            );
        this.shape.setTransform(177.075, 19.025);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "ABQBTIgMAAIgMAAIgOABIAAgGIACAAIABAAQAGAAACgCQABAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgDIgDgHIghg+IgKAAIAAA9IABAKQABAEAEABIAJACIAAAGIgMgBIgLAAIgLAAIgOABIAAgGIAKgCQAEgBABgEQABgDAAgHIAAg9IgKAAIghA+IgDAHIgBADQAAABAAABQABAAAAABQAAAAABAAQAAABABAAQADABAIABIAAAGIgOgBIgMAAIgMAAIgOABIAAgGIAJgBQAEgCADgDIAGgKIAqhKIgig0QgEgHgGgDQgFgDgIAAIAAgGIALABIAJAAIAJAAIALgBIAAAGIgBAAIgCAAQgEAAgDACQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIABADIACADIAlA8IAKAAIAAg2QAAgHgBgDQgBgDgDgCQgEgCgHAAIAAgGIAPABIAKAAIAKAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAAA2IAKAAIAGgJIAfgzIACgDIABgDQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAAAIgKgCIAAgGIALABIAJAAIAKAAIALgBIAAAGQgJAAgFADQgFADgFAHIgiA0IAqBKIAHAKQADADADACIAJABIAAAGIgOgBg"
            );
        this.shape_1.setTransform(161.075, 19.25);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAxBVIgLAAIgMAAIgNABIAAgFQAHgBACgCQADgCAAgDIAAgEIgBgEIgHgcIgsAAIgHAYIgCAHIgBAFQAAAEAEABQADACAHABIAAAFIgLAAIgJgBIgIABIgKAAIAAgFQAGgBADgBQADgCACgDQACgEACgHIAtiUIAqCXIADAIQACADAEACIAJACIAAAFIgNgBgAAPAdIgRhIIgWBIIAnAAg"
            );
        this.shape_2.setTransform(145.175, 19.025);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgWBMQgMgLgHgTQgGgUgBgaQABgZAGgUQAHgTAMgLQAMgLAQAAQAJAAAIAEQAHADAGAIIAHgOIAEAAIAAAxIgFAAQgEgVgJgLQgIgKgNAAQgRAAgJAVQgKAUAAAmQAAAjAKAUQAJATARAAQAPAAAIgMQAJgNABgXIAIAAQgBAcgMAQQgLAPgUABQgPgBgMgKg"
            );
        this.shape_3.setTransform(132.375, 19.275);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgWBMQgMgLgHgTQgGgUgBgaQABgZAGgUQAHgTAMgLQAMgLAQAAQAJAAAIAEQAHADAGAIIAHgOIAEAAIAAAxIgFAAQgEgVgJgLQgIgKgNAAQgRAAgJAVQgKAUAAAmQAAAjAKAUQAJATARAAQAPAAAIgMQAJgNABgXIAIAAQgBAcgMAQQgLAPgUABQgPgBgMgKg"
            );
        this.shape_4.setTransform(120.225, 19.275);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAxBVIgLAAIgMAAIgNABIAAgFQAHgBACgCQADgCAAgDIAAgEIgBgEIgHgcIgsAAIgHAYIgCAHIgBAFQAAAEAEABQADACAHABIAAAFIgLAAIgJgBIgIABIgKAAIAAgFQAGgBADgBQADgCACgDQACgEACgHIAtiUIAqCXIADAIQACADAEACIAJACIAAAFIgNgBgAAPAdIgRhIIgWBIIAnAAg"
            );
        this.shape_5.setTransform(107.875, 19.025);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA+BTIgLAAIgMAAIgOABIAAgGQAHAAAEgBQADgCACgEIABgKIgCh9IgpCPIgDAAIgqiPIgFB9IABAKQABAEAEABIALACIAAAGIgMAAIgIgBIgJABIgMAAIAAgGIADAAQAFAAADgCQADgBABgEIACgKIAEh5IAAgDQAAgHgDgDQgEgDgKgBIAAgGIAJABIAIAAIAKAAIAKgBIAjB8IAlh8IALABIAJAAIAHAAIAJgBIAAAGQgHAAgEACQgDACgCACIgBALIACB5IABAKQACAEADABIALACIAAAGIgOgBg"
            );
        this.shape_6.setTransform(93.025, 19.25);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBqIgKAAIgLAAIgOABIAAgFIAKgDQADgBABgDIABgKIAAhoIg1BlIAAADIABAKQABADAEABIAKADIAAAFIgPgBIgKAAIgLAAIgOABIAAgFIAKgDQADgBACgDIABgKIAAh6IgBgKQgCgDgDgCQgDgBgHgBIAAgFIAOABIALAAIALAAIAOgBIAAAFQgHABgDABQgEACgBADIgBAKIAABoIA1hlIAAgDIgBgKQgBgDgDgCQgDgBgHgBIAAgFIAOABIALAAIALAAIANgBIAAAFQgGABgEABQgDACgBADIgBAKIAAB6IABAKQABADADABIAKADIAAAFIgOgBgAgPhSQgHgIgCgRIAHAAQADAKAFAEQAFAFAGgBQAHABAGgFQAEgEADgKIAHAAQgBARgHAIQgHAJgMAAQgKAAgHgJg"
            );
        this.shape_7.setTransform(72.725, 16.9);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgtBTIAAgGQAHAAADgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgDgCgHAAIAAgGIBWAAIAEAlIgGAAQgCgMgDgGQgDgHgEgCQgEgDgHAAIgbAAIAABFIAaAAQAHAAACgEQADgFAAgMIAGAAIAAAwIgGAAQAAgMgDgEQgDgFgHAAIgZAAIAAA9QAAAJADADQACACAHABIAOAAQAIAAAEgDQAFgDADgHQADgHADgNIAFAAIgEAog"
            );
        this.shape_8.setTransform(60.175, 19.275);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgOABIAAgGIAKgCQADgBABgEIABgKIAAhmIg1BkIAAACIABAKQABAEAEABIAKACIAAAGIgPgBIgKAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAABnIA1hkIAAgDQABgHgCgDQgBgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_9.setTransform(47.975, 19.25);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA4BkQgBgSgIgIQgIgHgUABIhPAAIAAgHQAGAAAEgBQADgCABgEIACgJIAAh5IgCgKQgBgDgDgCQgEgCgGAAIAAgGIANABIAMABIALgBIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB3QAAAIACADQABAEAGABIARABIASgBQAGgBABgEQACgDAAgIIAAh3IgBgKQgBgDgDgCQgEgCgHAAIAAgGIAOABIAMABIAKgBIAOgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB3IABALQABAEADACIAKABIAAAng"
            );
        this.shape_10.setTransform(34.3, 20.85);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAtBTIgLAAIgNAAIgOABIAAgGIADAAIAIgCQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIgBgDIgDgHIgihAIgIALIAAA0IABAKQABAEAEABIAKACIAAAGIgNgBIgLAAIgMAAIgNABIAAgGIAKgCQADgBABgEIABgKIAAh5IgBgKQgBgDgDgCQgEgCgGAAIAAgGIAOABIALAAIAKAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAAA5IAsg/IACgDIAAgDQABgBAAAAQgBgBAAAAQAAgBAAAAQgBAAgBAAIgKgCIAAgGIALABIAKAAIAJAAIAMgBIAAAGIgKACIgHADIgHAIIghAvIArBPIAHAJQACAEAFACIAIABIAAAGIgOgBg"
            );
        this.shape_11.setTransform(21.2, 19.25);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgPABIAAgGIALgCQADgBABgEIABgKIAAg9Ig1AAIAAA9IABAKQABAEAEABIAKACIAAAGIgOgBIgLAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAAA2IA1AAIAAg2IgBgKQgBgDgDgCQgEgCgHAAIAAgGIAPABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_12.setTransform(7.675, 19.25);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgmBSQgDgDAAgGQAAgFACgDQADgDAFAAIADABIAEADIACACIACABQAFAAAEgFQADgGAEgLIghhuQgDgHgEgEQgEgEgIAAIAAgGIANABIAMAAIAMAAIANgBIAAAGQgIAAgDACQgDACAAACIABAEIABAEIAXBSIAahSIACgEIAAgEQAAgCgDgCQgDgCgIAAIAAgGIALABIAIAAIAJAAIAKgBIAAAGQgIABgEADQgEADgCAHIgiBpQgHAYgIAKQgIAKgKAAQgGgBgEgCg"
            );
        this.shape_13.setTransform(-4.975, 19.35);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AALBTIgLAAIgKAAIgOABIAAgGIALgCQADgBABgEIABgJIgNgCIgJgCQgRgHgKgPQgJgPAAgVQAAgSAHgNQAHgNANgIQAFgEAIgCQAHgCALAAIAAgCQAAgIgDgDQgDgDgKgBIAAgGIAOABIAKAAIALAAIAOgBIAAAGQgHAAgEACQgCACgCADIgBAKQANABAIACQAIADAHAFQALAHAFANQAHANAAAQQAAAVgKAPQgJAPgRAHQgFACgFAAIgNACIAAAAQAAAHACACQAAAEAEABIAKACIAAAGIgOgBgAAJA2QATAAAKgOQAKgOAAgaQAAgZgKgOQgLgOgSAAgAglgnQgKAOAAAZQAAAaAKAOQAKAOATAAIAAhrQgTAAgKAOg"
            );
        this.shape_14.setTransform(-18.55, 19.25);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgWBMQgMgLgHgTQgGgUgBgaQABgZAGgUQAHgTAMgLQAMgLAQAAQAJAAAIAEQAHADAGAIIAHgOIAEAAIAAAxIgFAAQgEgVgJgLQgIgKgNAAQgRAAgJAVQgKAUAAAmQAAAjAKAUQAJATARAAQAPAAAIgMQAJgNABgXIAIAAQgBAcgMAQQgLAPgUABQgPgBgMgKg"
            );
        this.shape_15.setTransform(-37.475, 19.275);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.shape_15 },
                        { t: this.shape_14 },
                        { t: this.shape_13 },
                        { t: this.shape_12 },
                        { t: this.shape_11 },
                        { t: this.shape_10 },
                        { t: this.shape_9 },
                        { t: this.shape_8 },
                        { t: this.shape_7 },
                        { t: this.shape_6 },
                        { t: this.shape_5 },
                        { t: this.shape_4 },
                        { t: this.shape_3 },
                        { t: this.shape_2 },
                        { t: this.shape_1 },
                        { t: this.shape },
                    ],
                })
                .wait(1)
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-45.4, 0, 231.1, 36.9);

    (lib.Symbol15 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AApBSIgLAAIgKAAIgOABIAAgFIAKgDQADgBABgDIABgKIAAg6IgGAAIgKADQgEABgCAEIgFANIgPAsIgCAHIgDAIIgIAAIgGAAIgHAAIgIAAIAAgFQAHAAAEgDQADgDADgJIANgnQADgKAEgFQAFgFAHgCQgRgDgIgKQgJgLAAgRQAAgKAEgJQADgJAHgGQAFgEAIgDQAHgCAJAAIA1AAIAAAFQgHABgDACQgEAAgBAEQgBADAAAHIAAB5QAAAHABADQABADADABIALADIAAAFIgPgBgAgOhCQgHAJAAARQAAAKADAIQADAIAEAFQAEACAFACQADACAHAAIANAAIAAhIIgPAAQgMAAgIAJg"
            );
        this.shape.setTransform(180.825, 19.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgwBUIAAgGQAHgBAEgBQADgCABgDIABgKIAAh5IgBgKQgBgDgDgCQgEgBgHgBIAAgGIAPACIAKAAIALAAIANgCIAAAGQgFABgEABQgDACgBADIgBAKIAAA1IASAAQAVABALALQAMAMAAAVQAAALgEAJQgDAKgHAGQgFAFgIACQgIADgLAAgAgNA/QAAAIACACQACADAIAAIABAAQAIAAAFgCQAFgCAEgEQADgEADgIQACgIAAgJQAAgIgCgHQgBgGgDgFQgEgHgGgDQgGgDgIAAIgNAAg"
            );
        this.shape_1.setTransform(169.775, 19.225);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgPABIAAgGIALgCQADgBABgEIABgKIAAg9Ig1AAIAAA9IABAKQABAEAEABIAKACIAAAGIgOgBIgLAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAAA2IA1AAIAAg2IgBgKQgBgDgDgCQgEgCgHAAIAAgGIAPABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_2.setTransform(157.325, 19.25);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgtBTIAAgGQAHAAADgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgDgCgHAAIAAgGIBWAAIAEAlIgGAAQgCgMgDgGQgDgHgEgCQgEgDgHAAIgbAAIAABFIAaAAQAHAAACgEQADgFAAgMIAGAAIAAAwIgGAAQAAgMgDgEQgDgFgHAAIgZAAIAAA9QAAAJADADQACACAHABIAOAAQAIAAAEgDQAFgDADgHQADgHADgNIAFAAIgEAog"
            );
        this.shape_3.setTransform(144.775, 19.275);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA4BkQAAgTgJgHQgJgIgTABIglAAQgUAAgIAHQgIAHgBATIgGAAIAAgnQALgBAGgEQAGgGADgKQADgIACgMIADgaIADggIABghQAAgJgBgFQgBgEgEgBQgDgCgHgBIAAgFIBkAAIAAAFQgGABgEACQgDAAgBAEQgBADAAAHIAAB4QgBAGABAEQACADADACQAEACAGAAIAAAngAgJhaQgEABgBAIIgBAVQgBAngEAaQgDAbgGAPIAAADIgBACQAAAEAIACQAIABATAAIAOgBQAFgBABgDQACgEAAgHIAAh2QAAgHgCgEQgBgDgFgBIgOgBIgFAAIgJABg"
            );
        this.shape_4.setTransform(132.55, 20.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgOABIAAgGIAKgCQADgBABgEIABgKIAAhmIg1BkIAAACIABAKQABAEAEABIAKACIAAAGIgPgBIgKAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAABnIA1hkIAAgDQABgHgCgDQgBgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_5.setTransform(119.525, 19.25);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgWBMQgMgLgHgTQgGgUgBgaQABgZAGgUQAHgTAMgLQAMgLAQAAQAJAAAIAEQAHADAGAIIAHgOIAEAAIAAAxIgFAAQgEgVgJgLQgIgKgNAAQgRAAgJAVQgKAUAAAmQAAAjAKAUQAJATARAAQAPAAAIgMQAJgNABgXIAIAAQgBAcgMAQQgLAPgUABQgPgBgMgKg"
            );
        this.shape_6.setTransform(106.425, 19.275);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgtBTIAAgGQAHAAADgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgDgCgHAAIAAgGIBWAAIAEAlIgGAAQgCgMgDgGQgDgHgEgCQgEgDgHAAIgbAAIAABFIAaAAQAHAAACgEQADgFAAgMIAGAAIAAAwIgGAAQAAgMgDgEQgDgFgHAAIgZAAIAAA9QAAAJADADQACACAHABIAOAAQAIAAAEgDQAFgDADgHQADgHADgNIAFAAIgEAog"
            );
        this.shape_7.setTransform(89.675, 19.275);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA6BTIgKAAIgLAAIgOABIAAgGIAKgCQADgBABgEIABgKIAAh5IgBgKQgBgDgDgCQgEgCgGAAIAAgGIAOABIALAAIAKAAIAPgBIAAAGQgHAAgDACQgDACgCADQgBADAAAHIAAB5QAAAHABADQACAEADABIAKACIAAAGIgPgBgAhIBUIAAgGQAHgBAEgBQADgCABgDIABgKIAAh5IgBgKQgBgDgDgCQgEgCgHAAIAAgGIAOABIALABIALgBIAOgBIAAAGQgHAAgDACQgEACAAADIgBAKIAAA1IASAAQATAAALAMQAMAMAAAVQAAAKgEAKQgDAJgGAHQgFAFgIACQgHADgMAAgAglA+QAAAJACACQACACAIABIABAAQAIAAAEgCQAGgCADgEQADgFACgHQACgJAAgIQAAgIgCgHQgBgHgCgEQgDgIgGgCQgGgDgJAAIgMAAg"
            );
        this.shape_8.setTransform(76.35, 19.25);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgPABIAAgGIALgCQADgBABgEIABgKIAAg9Ig1AAIAAA9IABAKQABAEAEABIAKACIAAAGIgOgBIgLAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAAA2IA1AAIAAg2IgBgKQgBgDgDgCQgEgCgHAAIAAgGIAPABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_9.setTransform(61.475, 19.25);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgMBSIgLAAIgKAAIgPABIAAgFIALgDQADgBABgDIABgKIAAh5IgBgKQgBgEgDAAQgEgCgHgBIAAgFIAzAAQAMAAAIADQAJADAGAFQAFAHADAJQADAJAAAJQgBAWgLALQgMALgUABIgSAAIAAA1IABAKQABADADABIAJADIAAAFIgNgBgAgNAAIAMAAQAIAAAHgCQAGgDAEgGQADgGABgHQACgGAAgIQAAgKgDgIQgDgJgFgEQgDgDgFgBQgFgCgGAAIgNAAg"
            );
        this.shape_10.setTransform(49.175, 19.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgmBSQgDgDAAgGQAAgFACgDQADgDAFAAIADABIAEADIACACIACABQAFAAAEgFQADgGAEgLIghhuQgDgHgEgEQgEgEgIAAIAAgGIANABIAMAAIAMAAIANgBIAAAGQgIAAgDACQgDACAAACIABAEIABAEIAXBSIAahSIACgEIAAgEQAAgCgDgCQgDgCgIAAIAAgGIALABIAIAAIAJAAIAKgBIAAAGQgIABgEADQgEADgCAHIgiBpQgHAYgIAKQgIAKgKAAQgGgBgEgCg"
            );
        this.shape_11.setTransform(37.775, 19.35);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics
            .f("#FFFFFF")
            .s()
            .p("AALBSIgLAAIgKAAIgOABIAAgFIAKgDQADgBACgDQABgDAAgHIAAiIIgKAAQgHAAgFADQgEACgDAHQgDAGgDANIgFAAIAFgmIBXAAIAFAmIgFAAQgDgNgDgGQgDgHgEgCQgEgDgHAAIgKAAIAACIIAAAKQABADADABIALADIAAAFIgOgBg");
        this.shape_12.setTransform(26.4, 19.3);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgPABIAAgGIALgCQADgBABgEIABgKIAAg9Ig1AAIAAA9IABAKQABAEAEABIAKACIAAAGIgOgBIgLAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAAA2IA1AAIAAg2IgBgKQgBgDgDgCQgEgCgHAAIAAgGIAPABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_13.setTransform(14.175, 19.25);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgRBTQgJgFgGgIQgHgGgEgLQgFgLgCgNQgDgOAAgPQABgZAGgUQAHgTAMgLQAMgKAPAAQARAAAMAKQAMALAGAUQAHATAAAcQAAAPgDAOQgDAOgGALQgFAMgHAGQgGAGgIADQgHADgIgBQgJAAgJgDgAgYg6QgJAVAAAlQAAAlAJAWQAJAUAQAAQAPAAAJgUQAJgVAAgmQAAglgJgUQgJgWgQABQgPAAgJAUg"
            );
        this.shape_14.setTransform(0.925, 19.25);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAuBTIgNAAIgLAAIgPABIAAgGIADAAIAIgCQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIgBgDIgDgHIghhAIgIALIAAA0IABAKQABAEADABIAJACIAAAGIgMgBIgLAAIgMAAIgNABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgEgCgGAAIAAgGIAOABIALAAIALAAIANgBIAAAGQgHAAgDACQgDACgBADIgBAKIAAA5IArg/IACgDIABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgKgCIAAgGIALABIAJAAIAKAAIAKgBIAAAGIgJACIgHADIgHAIIggAvIAqBPIAGAJQAEAEADACIAJABIAAAGIgNgBg"
            );
        this.shape_15.setTransform(-11.7, 19.25);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgOABIAAgGIAKgCQADgBABgEIABgKIAAhmIg1BkIAAACIABAKQABAEAEABIAKACIAAAGIgPgBIgKAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAABnIA1hkIAAgDQABgHgCgDQgBgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_16.setTransform(-25.225, 19.25);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics
            .f("#FFFFFF")
            .s()
            .p("AALBSIgLAAIgKAAIgOABIAAgFIAKgDQAEgBABgDQABgDAAgHIAAiIIgKAAQgIAAgDADQgFACgDAHQgDAGgDANIgFAAIAFgmIBXAAIAFAmIgFAAQgDgNgDgGQgDgHgEgCQgEgDgHAAIgLAAIAACIIABAKQABADAEABIAKADIAAAFIgOgBg");
        this.shape_17.setTransform(-37.4, 19.3);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgwBUIAAgGQAHgBAEgBQADgCABgDIABgKIAAh5IgBgKQgBgDgDgCQgEgBgHgBIAAgGIAPACIAKAAIALAAIANgCIAAAGQgFABgEABQgDACgBADIgBAKIAAA1IASAAQAVABALALQAMAMAAAVQAAALgEAJQgDAKgHAGQgFAFgIACQgIADgLAAgAgNA/QAAAIACACQACADAIAAIABAAQAIAAAFgCQAFgCAEgEQADgEADgIQACgIAAgJQAAgIgCgHQgBgGgDgFQgEgHgGgDQgGgDgIAAIgNAAg"
            );
        this.shape_18.setTransform(-48.025, 19.225);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "Ag7BQQgEgDAAgGQAAgFADgDQADgEAEABQAEAAACABIADAEIABACIABABQAEgBADgGQAEgIADgNIACgTIADgYIACgbIAAgZQABgKgBgFQgCgEgDgBQgEgCgGgBIAAgFIBkAAIAAAFQgHABgDACQgEAAAAAEQgCADAAAHIAAB5QAAAHACADQABAEACABIALACIAAAGIgOgCIgLAAIgLAAIgOACIAAgGIAKgCQADgBABgEIABgKIAAh4QAAgHgBgEQgCgDgEgBIgOgBQgJAAgFACQgEABgBAHIgBAWIgCAfIgDAcIgCAWQgFAZgIALQgGAMgLgBQgGAAgEgEg"
            );
        this.shape_19.setTransform(-60.7, 19.4);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgmBSQgDgDAAgGQAAgFACgDQADgDAFAAIADABIAEADIACACIACABQAFAAAEgFQADgGAEgLIghhuQgDgHgEgEQgEgEgIAAIAAgGIANABIAMAAIAMAAIANgBIAAAGQgIAAgDACQgDACAAACIABAEIABAEIAXBSIAahSIACgEIAAgEQAAgCgDgCQgDgCgIAAIAAgGIALABIAIAAIAJAAIAKgBIAAAGQgIABgEADQgEADgCAHIgiBpQgHAYgIAKQgIAKgKAAQgGgBgEgCg"
            );
        this.shape_20.setTransform(-72.875, 19.35);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA+BTIgLAAIgMAAIgOABIAAgGQAHAAAEgBQADgCACgEIABgKIgCh9IgpCPIgDAAIgqiPIgFB9IABAKQABAEAEABIALACIAAAGIgMAAIgIgBIgJABIgMAAIAAgGIADAAQAFAAADgCQADgBABgEIACgKIAEh5IAAgDQAAgHgDgDQgEgDgKgBIAAgGIAJABIAIAAIAKAAIAKgBIAjB8IAlh8IALABIAJAAIAHAAIAJgBIAAAGQgHAAgEACQgDACgCACIgBALIACB5IABAKQACAEADABIALACIAAAGIgOgBg"
            );
        this.shape_21.setTransform(-87.225, 19.25);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.shape_21 },
                        { t: this.shape_20 },
                        { t: this.shape_19 },
                        { t: this.shape_18 },
                        { t: this.shape_17 },
                        { t: this.shape_16 },
                        { t: this.shape_15 },
                        { t: this.shape_14 },
                        { t: this.shape_13 },
                        { t: this.shape_12 },
                        { t: this.shape_11 },
                        { t: this.shape_10 },
                        { t: this.shape_9 },
                        { t: this.shape_8 },
                        { t: this.shape_7 },
                        { t: this.shape_6 },
                        { t: this.shape_5 },
                        { t: this.shape_4 },
                        { t: this.shape_3 },
                        { t: this.shape_2 },
                        { t: this.shape_1 },
                        { t: this.shape },
                    ],
                })
                .wait(1)
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-97.5, 0, 286.8, 36.9);

    (lib.Symbol13 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgOABIAAgGIAKgCQADgBABgEIABgKIAAhmIg1BkIAAACIABAKQABAEAEABIAKACIAAAGIgPgBIgKAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAABnIA1hkIAAgDQABgHgCgDQgBgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape.setTransform(119.475, 19.25);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA+BTIgLAAIgMAAIgOABIAAgGQAHAAAEgBQADgCACgEIABgKIgCh9IgpCPIgDAAIgqiPIgFB9IABAKQABAEAEABIALACIAAAGIgMAAIgIgBIgJABIgMAAIAAgGIADAAQAFAAADgCQADgBABgEIACgKIAEh5IAAgDQAAgHgDgDQgEgDgKgBIAAgGIAJABIAIAAIAKAAIAKgBIAjB8IAlh8IALABIAJAAIAHAAIAJgBIAAAGQgHAAgEACQgDACgCACIgBALIACB5IABAKQACAEADABIALACIAAAGIgOgBg"
            );
        this.shape_1.setTransform(104.325, 19.25);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgwBUIAAgGQAHgBAEgBQADgCABgDIABgKIAAh5IgBgKQgBgDgDgCQgEgBgHgBIAAgGIAPACIAKAAIALAAIANgCIAAAGQgFABgEABQgDACgBADIgBAKIAAA1IASAAQAVABALALQAMAMAAAVQAAALgEAJQgDAKgHAGQgFAFgIACQgIADgLAAgAgNA/QAAAIACACQACADAIAAIABAAQAIAAAFgCQAFgCAEgEQADgEADgIQACgIAAgJQAAgIgCgHQgBgGgDgFQgEgHgGgDQgGgDgIAAIgNAAg"
            );
        this.shape_2.setTransform(90.775, 19.225);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgMBSIgLAAIgKAAIgPABIAAgFIALgDQADgBABgDIABgKIAAh5IgBgKQgBgEgDAAQgEgCgHgBIAAgFIAzAAQAMAAAIADQAJADAGAFQAFAHADAJQADAJAAAJQgBAWgLALQgMALgUABIgSAAIAAA1IABAKQABADADABIAJADIAAAFIgNgBgAgNAAIAMAAQAIAAAHgCQAGgDAEgGQADgGABgHQACgGAAgIQAAgKgDgIQgDgJgFgEQgDgDgFgBQgFgCgGAAIgNAAg"
            );
        this.shape_3.setTransform(79.725, 19.3);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgtBTIAAgGQAHAAADgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgDgCgHAAIAAgGIBWAAIAEAlIgGAAQgCgMgDgGQgDgHgEgCQgEgDgHAAIgbAAIAABFIAaAAQAHAAACgEQADgFAAgMIAGAAIAAAwIgGAAQAAgMgDgEQgDgFgHAAIgZAAIAAA9QAAAJADADQACACAHABIAOAAQAIAAAEgDQAFgDADgHQADgHADgNIAFAAIgEAog"
            );
        this.shape_4.setTransform(68.425, 19.275);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgwBTIAAgGQAGAAAEgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgEgCgGAAIAAgGIAzAAQAKAAAIACQAHADAFAGQAFAFADAIQACAIAAAIQAAANgGAKQgFAJgMAFQAOAEAIAJQAHALAAARQABANgHALQgGAMgJAGQgGADgGABQgHABgIAAgAgOA/QAAAIACACQACACAHABIAEAAQAOgBAHgKQAIgKAAgTQAAgKgDgIQgCgIgFgEQgDgDgFgCQgFgBgGAAIgPAAgAgOgHIALAAQAIAAAFgCQAGgDADgGQADgEAAgGQACgGAAgIQAAgJgCgIQgCgHgFgEQgCgCgFgCIgJgBIgNAAg"
            );
        this.shape_5.setTransform(57.15, 19.275);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA4BkQgBgTgIgHQgJgIgTABIglAAQgTAAgJAHQgIAHgBATIgGAAIAAgnQALgBAGgEQAFgGAEgKIAFgUIADgaIADggIAAghQABgJgBgFQgBgEgDgBQgEgCgHgBIAAgFIBlAAIAAAFQgIABgCACQgEAAgBAEQgBADAAAHIAAB4QAAAGAAAEQABADAEACQADACAIAAIAAAngAgJhaQgDABgCAIIgBAVQgCAngDAaQgDAbgGAPIAAADIgBACQAAAEAIACQAJABASAAIAOgBQAFgBACgDQABgEAAgHIAAh2QAAgHgBgEQgCgDgFgBIgOgBIgFAAIgJABg"
            );
        this.shape_6.setTransform(44.6, 20.9);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgOABIAAgGIAKgCQADgBABgEIABgKIAAhmIg1BkIAAACIABAKQABAEAEABIAKACIAAAGIgPgBIgKAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAABnIA1hkIAAgDQABgHgCgDQgBgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_7.setTransform(26.425, 19.25);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA+BTIgLAAIgMAAIgOABIAAgGQAHAAAEgBQADgCACgEIABgKIgCh9IgpCPIgDAAIgqiPIgFB9IABAKQABAEAEABIALACIAAAGIgMAAIgIgBIgJABIgMAAIAAgGIADAAQAFAAADgCQADgBABgEIACgKIAEh5IAAgDQAAgHgDgDQgEgDgKgBIAAgGIAJABIAIAAIAKAAIAKgBIAjB8IAlh8IALABIAJAAIAHAAIAJgBIAAAGQgHAAgEACQgDACgCACIgBALIACB5IABAKQACAEADABIALACIAAAGIgOgBg"
            );
        this.shape_8.setTransform(11.275, 19.25);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgOABIAAgGIAKgCQADgBABgEIABgKIAAhmIg1BkIAAACIABAKQABAEAEABIAKACIAAAGIgPgBIgKAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAABnIA1hkIAAgDQABgHgCgDQgBgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_9.setTransform(-3.875, 19.25);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgPABIAAgGIALgCQADgBABgEIABgKIAAg9Ig1AAIAAA9IABAKQABAEAEABIAKACIAAAGIgOgBIgLAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAAA2IA1AAIAAg2IgBgKQgBgDgDgCQgEgCgHAAIAAgGIAPABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_10.setTransform(-17.575, 19.25);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA4BkQgBgTgIgHQgIgIgUABIglAAQgTAAgJAHQgIAHgBATIgFAAIAAgnQAKgBAGgEQAGgGADgKQACgIACgMIAFgaIACggIAAghQABgJgBgFQgBgEgEgBQgDgCgHgBIAAgFIBlAAIAAAFQgHABgEACQgDAAgBAEQgCADABAHIAAB4QgBAGACAEQABADADACQADACAIAAIAAAngAgIhaQgFABgBAIIgBAVQgCAngDAaQgEAbgFAPIgBADIAAACQAAAEAIACQAIABASAAIAPgBQAFgBACgDQABgEAAgHIAAh2QAAgHgBgEQgCgDgFgBIgPgBIgEAAIgIABg"
            );
        this.shape_11.setTransform(-31.3, 20.9);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAxBVIgLAAIgMAAIgNABIAAgFQAHgBACgCQADgCAAgDIAAgEIgBgEIgHgcIgsAAIgHAYIgCAHIgBAFQAAAEAEABQADACAHABIAAAFIgLAAIgJgBIgIABIgKAAIAAgFQAGgBADgBQADgCACgDQACgEACgHIAtiUIAqCXIADAIQACADAEACIAJACIAAAFIgNgBgAAPAdIgRhIIgWBIIAnAAg"
            );
        this.shape_12.setTransform(-43.925, 19.025);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgZBPQgKgIgGgOIgCgNIgCgRIAHAAIACARIAEAMQADAJAIAFQAIAFAKAAQANAAAJgLQAHgKAAgTQAAgNgEgIQgEgIgIgDIgGgCIgIgBIgFAAIAAgGIAFAAQAFAAAEgCQAEgBAEgEQAFgFADgIQACgIAAgJQAAgQgHgJQgIgJgMAAQgNgBgIALQgIAKgFAVIgFAAIAAgxIAEAAIAHAOQAGgIAIgDQAHgEAMAAQATAAALAMQALALAAAUQAAAQgHALQgIAKgOADQAQACAJAKQAIAKAAASQgBAXgMANQgMANgUABQgPAAgLgIg"
            );
        this.shape_13.setTransform(-56.25, 19.275);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.shape_13 },
                        { t: this.shape_12 },
                        { t: this.shape_11 },
                        { t: this.shape_10 },
                        { t: this.shape_9 },
                        { t: this.shape_8 },
                        { t: this.shape_7 },
                        { t: this.shape_6 },
                        { t: this.shape_5 },
                        { t: this.shape_4 },
                        { t: this.shape_3 },
                        { t: this.shape_2 },
                        { t: this.shape_1 },
                        { t: this.shape },
                    ],
                })
                .wait(1)
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-64.2, 0, 192.7, 36.9);

    (lib.Symbol12 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgtBTIAAgGQAHAAADgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgDgCgHAAIAAgGIBWAAIAEAlIgGAAQgCgMgDgGQgDgHgEgCQgEgDgHAAIgbAAIAABFIAaAAQAHAAACgEQADgFAAgMIAGAAIAAAwIgGAAQAAgMgDgEQgDgFgHAAIgZAAIAAA9QAAAJADADQACACAHABIAOAAQAIAAAEgDQAFgDADgHQADgHADgNIAFAAIgEAog"
            );
        this.shape.setTransform(188.225, 19.275);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgOABIAAgGIAKgCQADgBABgEIABgKIAAhmIg1BkIAAACIABAKQABAEAEABIAKACIAAAGIgPgBIgKAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAABnIA1hkIAAgDQABgHgCgDQgBgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_1.setTransform(176.025, 19.25);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgPABIAAgGIALgCQADgBABgEIABgKIAAg9Ig1AAIAAA9IABAKQABAEAEABIAKACIAAAGIgOgBIgLAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAAA2IA1AAIAAg2IgBgKQgBgDgDgCQgEgCgHAAIAAgGIAPABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_2.setTransform(162.325, 19.25);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgtBTIAAgGQAHAAADgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgDgCgHAAIAAgGIBWAAIAEAlIgGAAQgCgMgDgGQgDgHgEgCQgEgDgHAAIgbAAIAABFIAaAAQAHAAACgEQADgFAAgMIAGAAIAAAwIgGAAQAAgMgDgEQgDgFgHAAIgZAAIAAA9QAAAJADADQACACAHABIAOAAQAIAAAEgDQAFgDADgHQADgHADgNIAFAAIgEAog"
            );
        this.shape_3.setTransform(149.775, 19.275);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "Ag7BQQgEgDAAgGQAAgFADgDQADgEAFABQACAAACABIAEAEIABACIABABQAEgBAEgGQACgIADgNIAEgTIACgYIABgbIABgZQABgKgCgFQgBgEgDgBQgDgCgIgBIAAgFIBlAAIAAAFQgHABgDACQgDAAgCAEQgBADAAAHIAAB5QAAAHABADQABAEAEABIAKACIAAAGIgOgCIgLAAIgLAAIgOACIAAgGIAKgCQAEgBABgEIABgKIAAh4QgBgHgBgEQgCgDgEgBIgPgBQgIAAgEACQgFABgCAHIgBAWIgBAfIgCAcIgEAWQgEAZgIALQgHAMgKgBQgGAAgEgEg"
            );
        this.shape_4.setTransform(137.35, 19.4);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgxBTIAAgGQAIAAADgCQADgBABgEIABgJIAAh5IgBgKQgBgDgDgBQgDgCgIAAIAAgGIAzAAQALAAAIACQAHADAFAGQAFAFACAIQADAIAAAIQAAANgGAKQgGAJgMAFQAPAEAIAJQAIALgBARQAAANgFALQgHAMgJAGQgFADgHABQgGABgKAAgAgOA/QAAAIACACQACACAIABIADAAQAOgBAHgKQAIgKAAgTQAAgKgDgIQgDgIgEgEQgDgDgFgCQgFgBgHAAIgOAAgAgOgHIAKAAQAIAAAGgCQAGgDADgGQACgEABgGQACgGAAgIQAAgJgDgIQgCgHgDgEQgDgCgEgCIgJgBIgOAAg"
            );
        this.shape_5.setTransform(125.05, 19.275);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAxBVIgLAAIgMAAIgNABIAAgFQAHgBACgCQADgCAAgDIAAgEIgBgEIgHgcIgsAAIgHAYIgCAHIgBAFQAAAEAEABQADACAHABIAAAFIgLAAIgJgBIgIABIgKAAIAAgFQAGgBADgBQADgCACgDQACgEACgHIAtiUIAqCXIADAIQACADAEACIAJACIAAAFIgNgBgAAPAdIgRhIIgWBIIAnAAg"
            );
        this.shape_6.setTransform(112.925, 19.025);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgMBSIgLAAIgKAAIgPABIAAgFIALgDQADgBABgDIABgKIAAh5IgBgKQgBgEgDAAQgEgCgHgBIAAgFIAzAAQAMAAAIADQAJADAGAFQAFAHADAJQADAJAAAJQgBAWgLALQgMALgUABIgSAAIAAA1IABAKQABADADABIAJADIAAAFIgNgBgAgNAAIAMAAQAIAAAHgCQAGgDAEgGQADgGABgHQACgGAAgIQAAgKgDgIQgDgJgFgEQgDgDgFgBQgFgCgGAAIgNAAg"
            );
        this.shape_7.setTransform(100.925, 19.3);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBSIgKAAIgLAAIgPABIAAgFIALgDQADgBABgDIABgKIAAh4QAAgHgBgEQgCgDgGgBIgSgBIgRABQgGABgBADQgCAEAAAHIAAB4IABAKQABADAEABIAKADIAAAFIgOgBIgLAAIgLAAIgOABIAAgFIAKgDQADgBACgDIABgKIAAh5IgBgKQgCgEgDAAQgDgCgHgBIAAgFIB5AAIAAAFQgGABgEACQgDAAgBAEIgBAKIAAB5IABAKQABADADABIAKADIAAAFIgOgBg"
            );
        this.shape_8.setTransform(88.475, 19.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgmBSQgDgDAAgGQAAgFACgDQADgDAFAAIADABIAEADIACACIACABQAFAAAEgFQADgGAEgLIghhuQgDgHgEgEQgEgEgIAAIAAgGIANABIAMAAIAMAAIANgBIAAAGQgIAAgDACQgDACAAACIABAEIABAEIAXBSIAahSIACgEIAAgEQAAgCgDgCQgDgCgIAAIAAgGIALABIAIAAIAJAAIAKgBIAAAGQgIABgEADQgEADgCAHIgiBpQgHAYgIAKQgIAKgKAAQgGgBgEgCg"
            );
        this.shape_9.setTransform(75.825, 19.35);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgtBTIAAgGQAHAAADgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgDgCgHAAIAAgGIBWAAIAEAlIgGAAQgCgMgDgGQgDgHgEgCQgEgDgHAAIgbAAIAABFIAaAAQAHAAACgEQADgFAAgMIAGAAIAAAwIgGAAQAAgMgDgEQgDgFgHAAIgZAAIAAA9QAAAJADADQACACAHABIAOAAQAIAAAEgDQAFgDADgHQADgHADgNIAFAAIgEAog"
            );
        this.shape_10.setTransform(58.925, 19.275);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgRBTQgJgFgGgIQgHgGgEgLQgFgLgCgNQgDgOAAgPQABgZAGgUQAHgTAMgLQAMgKAPAAQARAAAMAKQAMALAGAUQAHATAAAcQAAAPgDAOQgDAOgGALQgFAMgHAGQgGAGgIADQgHADgIgBQgJAAgJgDgAgYg6QgJAVAAAlQAAAlAJAWQAJAUAQAAQAPAAAJgUQAJgVAAgmQAAglgJgUQgJgWgQABQgPAAgJAUg"
            );
        this.shape_11.setTransform(47.175, 19.25);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgPABIAAgGIALgCQADgBABgEIABgKIAAg9Ig1AAIAAA9IABAKQABAEAEABIAKACIAAAGIgOgBIgLAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAAA2IA1AAIAAg2IgBgKQgBgDgDgCQgEgCgHAAIAAgGIAPABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_12.setTransform(33.925, 19.25);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics
            .f("#FFFFFF")
            .s()
            .p("AALBSIgLAAIgKAAIgOABIAAgFIALgDQADgBAAgDQACgDgBgHIAAiIIgKAAQgHAAgDADQgFACgDAHQgDAGgDANIgFAAIAFgmIBXAAIAFAmIgFAAQgDgNgDgGQgDgHgEgCQgEgDgHAAIgLAAIAACIIABAKQACADADABIAKADIAAAFIgOgBg");
        this.shape_13.setTransform(21.75, 19.3);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgMBSIgLAAIgKAAIgPABIAAgFIALgDQADgBABgDIABgKIAAh5IgBgKQgBgEgDAAQgEgCgHgBIAAgFIAzAAQAMAAAIADQAJADAGAFQAFAHADAJQADAJAAAJQgBAWgLALQgMALgUABIgSAAIAAA1IABAKQABADADABIAJADIAAAFIgNgBgAgNAAIAMAAQAIAAAHgCQAGgDAEgGQADgGABgHQACgGAAgIQAAgKgDgIQgDgJgFgEQgDgDgFgBQgFgCgGAAIgNAAg"
            );
        this.shape_14.setTransform(10.925, 19.3);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgRBTQgJgFgGgIQgHgGgEgLQgFgLgCgNQgDgOAAgPQABgZAGgUQAHgTAMgLQAMgKAPAAQARAAAMAKQAMALAGAUQAHATAAAcQAAAPgDAOQgDAOgGALQgFAMgHAGQgGAGgIADQgHADgIgBQgJAAgJgDgAgYg6QgJAVAAAlQAAAlAJAWQAJAUAQAAQAPAAAJgUQAJgVAAgmQAAglgJgUQgJgWgQABQgPAAgJAUg"
            );
        this.shape_15.setTransform(-1.075, 19.25);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAKBTIgKAAIgJAAIgPABIAAgGIAKgCQAEgBABgEIABgJIgNgCIgKgCQgQgHgKgPQgJgPgBgVQABgSAHgNQAHgNAMgIQAHgEAHgCQAIgCAKAAIAAgCQAAgIgDgDQgDgDgKgBIAAgGIAPABIAJAAIAKAAIAPgBIAAAGQgHAAgEACQgCACgCADIgBAKQAMABAJACQAIADAHAFQAKAHAHANQAFANAAAQQAAAVgJAPQgJAPgSAHQgEACgFAAIgNACIAAAAQAAAHABACQACAEADABIAKACIAAAGIgPgBgAAJA2QATAAAKgOQAKgOAAgaQAAgZgKgOQgKgOgTAAgAglgnQgKAOAAAZQAAAaAKAOQAKAOATAAIAAhrQgSAAgLAOg"
            );
        this.shape_16.setTransform(-15, 19.25);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA+BTIgLAAIgMAAIgOABIAAgGQAHAAAEgBQADgCACgEIABgKIgCh9IgpCPIgDAAIgqiPIgFB9IABAKQABAEAEABIALACIAAAGIgMAAIgIgBIgJABIgMAAIAAgGIADAAQAFAAADgCQADgBABgEIACgKIAEh5IAAgDQAAgHgDgDQgEgDgKgBIAAgGIAJABIAIAAIAKAAIAKgBIAjB8IAlh8IALABIAJAAIAHAAIAJgBIAAAGQgHAAgEACQgDACgCACIgBALIACB5IABAKQACAEADABIALACIAAAGIgOgBg"
            );
        this.shape_17.setTransform(-30.825, 19.25);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgRBTQgJgFgGgIQgHgGgEgLQgFgLgCgNQgDgOAAgPQABgZAGgUQAHgTAMgLQAMgKAPAAQARAAAMAKQAMALAGAUQAHATAAAcQAAAPgDAOQgDAOgGALQgFAMgHAGQgGAGgIADQgHADgIgBQgJAAgJgDgAgYg6QgJAVAAAlQAAAlAJAWQAJAUAQAAQAPAAAJgUQAJgVAAgmQAAglgJgUQgJgWgQABQgPAAgJAUg"
            );
        this.shape_18.setTransform(-45.525, 19.25);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAtBTIgMAAIgLAAIgPABIAAgGIADAAIAIgCQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIgBgDIgDgHIgihAIgHALIAAA0IABAKQAAAEAEABIAJACIAAAGIgMgBIgLAAIgMAAIgNABIAAgGIAKgCQAEgBAAgEIACgKIAAh5IgCgKQAAgDgEgCQgDgCgHAAIAAgGIAOABIALAAIALAAIANgBIAAAGQgHAAgDACQgEACAAADIgBAKIAAA5IArg/IACgDIABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgLgCIAAgGIAMABIAJAAIAKAAIAKgBIAAAGIgJACIgHADIgHAIIggAvIAqBPIAGAJQADAEAEACIAJABIAAAGIgOgBg"
            );
        this.shape_19.setTransform(-58.15, 19.25);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.shape_19 },
                        { t: this.shape_18 },
                        { t: this.shape_17 },
                        { t: this.shape_16 },
                        { t: this.shape_15 },
                        { t: this.shape_14 },
                        { t: this.shape_13 },
                        { t: this.shape_12 },
                        { t: this.shape_11 },
                        { t: this.shape_10 },
                        { t: this.shape_9 },
                        { t: this.shape_8 },
                        { t: this.shape_7 },
                        { t: this.shape_6 },
                        { t: this.shape_5 },
                        { t: this.shape_4 },
                        { t: this.shape_3 },
                        { t: this.shape_2 },
                        { t: this.shape_1 },
                        { t: this.shape },
                    ],
                })
                .wait(1)
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-66.8, 0, 262.9, 36.9);

    (lib.Symbol11 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AApBSIgLAAIgKAAIgOABIAAgFIAKgDQADgBABgDIABgKIAAg6IgGAAIgKADQgEABgCAEIgFANIgPAsIgCAHIgDAIIgIAAIgGAAIgHAAIgIAAIAAgFQAHAAAEgDQADgDADgJIANgnQADgKAEgFQAFgFAHgCQgRgDgIgKQgJgLAAgRQAAgKAEgJQADgJAHgGQAFgEAIgDQAHgCAJAAIA1AAIAAAFQgHABgDACQgEAAgBAEQgBADAAAHIAAB5QAAAHABADQABADADABIALADIAAAFIgPgBgAgOhCQgHAJAAARQAAAKADAIQADAIAEAFQAEACAFACQADACAHAAIANAAIAAhIIgPAAQgMAAgIAJg"
            );
        this.shape.setTransform(70.975, 19.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgWBMQgMgLgHgTQgGgUgBgaQABgZAGgUQAHgTAMgLQAMgLAQAAQAJAAAIAEQAHADAGAIIAHgOIAEAAIAAAxIgFAAQgEgVgJgLQgIgKgNAAQgRAAgJAVQgKAUAAAmQAAAjAKAUQAJATARAAQAPAAAIgMQAJgNABgXIAIAAQgBAcgMAQQgLAPgUABQgPgBgMgKg"
            );
        this.shape_1.setTransform(58.925, 19.275);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics
            .f("#FFFFFF")
            .s()
            .p("AALBSIgLAAIgKAAIgOABIAAgFIALgDQACgBABgDQACgDgBgHIAAiIIgKAAQgHAAgEADQgEACgDAHQgDAGgCANIgGAAIAGgmIBVAAIAGAmIgGAAQgCgNgDgGQgCgHgFgCQgEgDgGAAIgLAAIAACIIABAKQABADACABIALADIAAAFIgOgBg");
        this.shape_2.setTransform(47.7, 19.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgtBTIAAgGQAHAAADgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgDgCgHAAIAAgGIBWAAIAEAlIgGAAQgCgMgDgGQgDgHgEgCQgEgDgHAAIgbAAIAABFIAaAAQAHAAACgEQADgFAAgMIAGAAIAAAwIgGAAQAAgMgDgEQgDgFgHAAIgZAAIAAA9QAAAJADADQACACAHABIAOAAQAIAAAEgDQAFgDADgHQADgHADgNIAFAAIgEAog"
            );
        this.shape_3.setTransform(36.625, 19.275);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAxBVIgLAAIgMAAIgNABIAAgFQAHgBACgCQADgCAAgDIAAgEIgBgEIgHgcIgsAAIgHAYIgCAHIgBAFQAAAEAEABQADACAHABIAAAFIgLAAIgJgBIgIABIgKAAIAAgFQAGgBADgBQADgCACgDQACgEACgHIAtiUIAqCXIADAIQACADAEACIAJACIAAAFIgNgBgAAPAdIgRhIIgWBIIAnAAg"
            );
        this.shape_4.setTransform(24.825, 19.025);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "ABQBTIgMAAIgMAAIgOABIAAgGIACAAIABAAQAGAAACgCQABAAABgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgDIgDgHIghg+IgKAAIAAA9IABAKQABAEAEABIAJACIAAAGIgMgBIgLAAIgLAAIgOABIAAgGIAKgCQAEgBABgEQABgDAAgHIAAg9IgKAAIghA+IgDAHIgBADQAAABAAABQABAAAAABQAAAAABAAQAAABABAAQADABAIABIAAAGIgOgBIgMAAIgMAAIgOABIAAgGIAJgBQAEgCADgDIAGgKIAqhKIgig0QgEgHgGgDQgFgDgIAAIAAgGIALABIAJAAIAJAAIALgBIAAAGIgBAAIgCAAQgEAAgDACQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAIABADIACADIAlA8IAKAAIAAg2QAAgHgBgDQgBgDgDgCQgEgCgHAAIAAgGIAPABIAKAAIAKAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAAA2IAKAAIAGgJIAfgzIACgDIABgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAIgKgCIAAgGIALABIAJAAIAKAAIALgBIAAAGQgJAAgFADQgFADgFAHIgiA0IAqBKIAHAKQADADADACIAJABIAAAGIgOgBg"
            );
        this.shape_5.setTransform(8.825, 19.25);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "Ag7BQQgEgDAAgGQAAgFADgDQADgEAEABQADAAADABIADAEIABACIABABQAEgBADgGQADgIAEgNIACgTIADgYIABgbIABgZQABgKgCgFQAAgEgEgBQgEgCgGgBIAAgFIBkAAIAAAFQgHABgDACQgDAAgCAEQgBADAAAHIAAB5QAAAHABADQACAEADABIAKACIAAAGIgOgCIgLAAIgLAAIgOACIAAgGIAKgCQADgBABgEIABgKIAAh4QABgHgCgEQgCgDgEgBIgOgBQgJAAgFACQgEABgBAHIgCAWIgBAfIgDAcIgCAWQgFAZgIALQgGAMgLgBQgHAAgDgEg"
            );
        this.shape_6.setTransform(-7.7, 19.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgRBTQgJgFgGgIQgHgGgEgLQgFgLgCgNQgDgOAAgPQABgZAGgUQAHgTAMgLQAMgKAPAAQARAAAMAKQAMALAGAUQAHATAAAcQAAAPgDAOQgDAOgGALQgFAMgHAGQgGAGgIADQgHADgIgBQgJAAgJgDgAgYg6QgJAVAAAlQAAAlAJAWQAJAUAQAAQAPAAAJgUQAJgVAAgmQAAglgJgUQgJgWgQABQgPAAgJAUg"
            );
        this.shape_7.setTransform(-20.475, 19.25);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA4BkQAAgTgJgHQgIgIgUABIglAAQgUAAgIAHQgIAHgBATIgFAAIAAgnQAKgBAGgEQAFgGAEgKQACgIACgMIAEgaIADggIABghQAAgJgBgFQgBgEgEgBQgDgCgHgBIAAgFIBkAAIAAAFQgHABgDACQgDAAgBAEQgCADABAHIAAB4QAAAGABAEQAAADAEACQAEACAGAAIAAAngAgJhaQgEABgBAIIgBAVQgCAngDAaQgEAbgFAPIgBADIAAACQAAAEAIACQAJABARAAIAPgBQAFgBABgDQACgEAAgHIAAh2QAAgHgCgEQgBgDgFgBIgPgBIgEAAIgJABg"
            );
        this.shape_8.setTransform(-33.75, 20.9);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgRBTQgJgFgGgIQgHgGgEgLQgFgLgCgNQgDgOAAgPQABgZAGgUQAHgTAMgLQAMgKAPAAQARAAAMAKQAMALAGAUQAHATAAAcQAAAPgDAOQgDAOgGALQgFAMgHAGQgGAGgIADQgHADgIgBQgJAAgJgDgAgYg6QgJAVAAAlQAAAlAJAWQAJAUAQAAQAPAAAJgUQAJgVAAgmQAAglgJgUQgJgWgQABQgPAAgJAUg"
            );
        this.shape_9.setTransform(-46.325, 19.25);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgMBSIgLAAIgKAAIgPABIAAgFIALgDQADgBABgDIABgKIAAh5IgBgKQgBgEgDAAQgEgCgHgBIAAgFIAzAAQAMAAAIADQAJADAGAFQAFAHADAJQADAJAAAJQgBAWgLALQgMALgUABIgSAAIAAA1IABAKQABADADABIAJADIAAAFIgNgBgAgNAAIAMAAQAIAAAHgCQAGgDAEgGQADgGABgHQACgGAAgIQAAgKgDgIQgDgJgFgEQgDgDgFgBQgFgCgGAAIgNAAg"
            );
        this.shape_10.setTransform(-58.175, 19.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBSIgKAAIgLAAIgPABIAAgFIALgDQADgBABgDIABgKIAAh4QAAgHgBgEQgCgDgGgBIgSgBIgRABQgGABgBADQgCAEAAAHIAAB4IABAKQABADAEABIAKADIAAAFIgOgBIgLAAIgLAAIgOABIAAgFIAKgDQADgBACgDIABgKIAAh5IgBgKQgCgEgDAAQgDgCgHgBIAAgFIB5AAIAAAFQgGABgEACQgDAAgBAEIgBAKIAAB5IABAKQABADADABIAKADIAAAFIgOgBg"
            );
        this.shape_11.setTransform(-70.625, 19.3);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.shape_11 },
                        { t: this.shape_10 },
                        { t: this.shape_9 },
                        { t: this.shape_8 },
                        { t: this.shape_7 },
                        { t: this.shape_6 },
                        { t: this.shape_5 },
                        { t: this.shape_4 },
                        { t: this.shape_3 },
                        { t: this.shape_2 },
                        { t: this.shape_1 },
                        { t: this.shape },
                    ],
                })
                .wait(1)
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-79.5, 0, 159, 36.9);

    (lib.Symbol10 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA7BTIgLAAIgLAAIgOABIAAgGIAKgCQAEgBAAgEIABgKIAAh5IgBgKQAAgDgEgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgEACQgCACgBADQgCADABAHIAAB5QgBAHACADQABAEACABIALACIAAAGIgOgBgAhIBUIAAgGQAHgBADgBQADgCACgDIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAPABIAKABIALgBIAOgBIAAAGQgGAAgEACQgDACgCADIAAAKIAAA1IASAAQATAAALAMQAMAMAAAVQAAAKgEAKQgDAJgHAHQgFAFgGACQgJADgKAAgAglA+QgBAJADACQACACAHABIACAAQAHAAAGgCQAEgCAEgEQADgFACgHQACgJAAgIQAAgIgCgHQgBgHgCgEQgEgIgFgCQgGgDgJAAIgMAAg"
            );
        this.shape.setTransform(70.8, 19.25);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA4BkQgBgTgIgHQgIgIgUABIglAAQgTAAgJAHQgIAHgBATIgFAAIAAgnQAKgBAGgEQAGgGADgKQACgIACgMIAFgaIACggIABghQAAgJgBgFQgBgEgEgBQgDgCgHgBIAAgFIBkAAIAAAFQgGABgEACQgDAAgBAEQgCADABAHIAAB4QAAAGABAEQABADADACQAEACAGAAIAAAngAgIhaQgEABgCAIIgBAVQgCAngDAaQgDAbgGAPIgBADIAAACQAAAEAIACQAIABASAAIAPgBQAFgBABgDQACgEAAgHIAAh2QAAgHgCgEQgBgDgFgBIgPgBIgEAAIgIABg"
            );
        this.shape_1.setTransform(55.9, 20.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgPABIAAgGIALgCQADgBABgEIABgKIAAg9Ig1AAIAAA9IABAKQABAEAEABIAKACIAAAGIgOgBIgLAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAAA2IA1AAIAAg2IgBgKQgBgDgDgCQgEgCgHAAIAAgGIAPABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_2.setTransform(42.875, 19.25);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgtBTIAAgGQAHAAADgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgDgCgHAAIAAgGIBWAAIAEAlIgGAAQgCgMgDgGQgDgHgEgCQgEgDgHAAIgbAAIAABFIAaAAQAHAAACgEQADgFAAgMIAGAAIAAAwIgGAAQAAgMgDgEQgDgFgHAAIgZAAIAAA9QAAAJADADQACACAHABIAOAAQAIAAAEgDQAFgDADgHQADgHADgNIAFAAIgEAog"
            );
        this.shape_3.setTransform(30.325, 19.275);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics
            .f("#FFFFFF")
            .s()
            .p("AgIBSIgLAAIgLAAIgOABIAAgFIAKgDQADgBACgDIABgKIAAh5IgBgKQgCgEgDAAQgEgCgGgBIAAgFIBWAAIAEAlIgGAAQgCgMgDgGQgDgHgFgCQgFgDgGAAIgaAAIAACIIABAKQABADADABIAJADIAAAFIgMgBg");
        this.shape_4.setTransform(20.2, 19.3);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgtBTIAAgGQAHAAADgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgDgCgHAAIAAgGIBWAAIAEAlIgGAAQgCgMgDgGQgDgHgEgCQgEgDgHAAIgbAAIAABFIAaAAQAHAAACgEQADgFAAgMIAGAAIAAAwIgGAAQAAgMgDgEQgDgFgHAAIgZAAIAAA9QAAAJADADQACACAHABIAOAAQAIAAAEgDQAFgDADgHQADgHADgNIAFAAIgEAog"
            );
        this.shape_5.setTransform(9.225, 19.275);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "Ag7BQQgEgDAAgGQAAgFADgDQADgEAEABQADAAADABIADAEIABACIABABQAEgBADgGQADgIAEgNIACgTIADgYIABgbIABgZQABgKgCgFQAAgEgEgBQgEgCgGgBIAAgFIBkAAIAAAFQgHABgDACQgDAAgCAEQgBADAAAHIAAB5QAAAHABADQACAEADABIAKACIAAAGIgOgCIgLAAIgLAAIgOACIAAgGIAKgCQADgBABgEIABgKIAAh4QABgHgCgEQgCgDgEgBIgOgBQgJAAgFACQgEABgBAHIgCAWIgBAfIgDAcIgCAWQgFAZgIALQgGAMgLgBQgHAAgDgEg"
            );
        this.shape_6.setTransform(-3.2, 19.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAxBVIgLAAIgMAAIgNABIAAgFQAHgBACgCQADgCAAgDIAAgEIgBgEIgHgcIgsAAIgHAYIgCAHIgBAFQAAAEAEABQADACAHABIAAAFIgLAAIgJgBIgIABIgKAAIAAgFQAGgBADgBQADgCACgDQACgEACgHIAtiUIAqCXIADAIQACADAEACIAJACIAAAFIgNgBgAAPAdIgRhIIgWBIIAnAAg"
            );
        this.shape_7.setTransform(-21.175, 19.025);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAtBTIgMAAIgMAAIgNABIAAgGIACAAIABAAIAIgCQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAAAgBIgBgFIgCgIIgVgwIgZAyIgDAHIgBAEQAAABAAABQAAAAAAABQABAAAAABQABAAAAABQAEABAGAAIAAAGIgKAAIgKgBIgJABIgKAAIAAgGQAHAAAFgEQAGgEAFgLIAeg6Igcg/IgFgJQgCgCgDgCQgEgCgFAAIAAgGIAMABIAMAAIANAAIAMgBIAAAGIgKACQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAIAAAFIABADIASAsIAXgsIACgEIAAgEQAAgCgDgCQgDgCgHAAIAAgGIAKABIAKAAIAKAAIAKgBIAAAGIgKACQgEABgCACIgEAIIgbA2IAfBIIAFAKQADADADACIAKABIAAAGIgPgBg"
            );
        this.shape_8.setTransform(-34, 19.25);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgRBTQgJgFgGgIQgHgGgEgLQgFgLgCgNQgDgOAAgPQABgZAGgUQAHgTAMgLQAMgKAPAAQARAAAMAKQAMALAGAUQAHATAAAcQAAAPgDAOQgDAOgGALQgFAMgHAGQgGAGgIADQgHADgIgBQgJAAgJgDgAgYg6QgJAVAAAlQAAAlAJAWQAJAUAQAAQAPAAAJgUQAJgVAAgmQAAglgJgUQgJgWgQABQgPAAgJAUg"
            );
        this.shape_9.setTransform(-46.725, 19.25);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBSIgKAAIgLAAIgPABIAAgFIALgDQADgBABgDIABgKIAAh4QAAgHgBgEQgCgDgGgBIgSgBIgRABQgGABgBADQgCAEAAAHIAAB4IABAKQABADAEABIAKADIAAAFIgOgBIgLAAIgLAAIgOABIAAgFIAKgDQADgBACgDIABgKIAAh5IgBgKQgCgEgDAAQgDgCgHgBIAAgFIB5AAIAAAFQgGABgEACQgDAAgBAEIgBAKIAAB5IABAKQABADADABIAKADIAAAFIgOgBg"
            );
        this.shape_10.setTransform(-59.975, 19.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgjBHQgLgQgBgcIAHAAQABAXAJANQAIAMAPAAQARAAAIgSQAKgTAAgmIgoAAIAAgGIAoAAQgBglgJgRQgJgSgRAAQgNAAgHAKQgJALgDAVIgGAAIAAgxIAEAAIAGAOQAHgIAHgDQAIgEAJAAQAPAAANALQAMALAHATQAGAUABAZQgBAagGAUQgHATgLALQgNAKgPABQgTgBgMgPg"
            );
        this.shape_11.setTransform(-72.75, 19.275);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.shape_11 },
                        { t: this.shape_10 },
                        { t: this.shape_9 },
                        { t: this.shape_8 },
                        { t: this.shape_7 },
                        { t: this.shape_6 },
                        { t: this.shape_5 },
                        { t: this.shape_4 },
                        { t: this.shape_3 },
                        { t: this.shape_2 },
                        { t: this.shape_1 },
                        { t: this.shape },
                    ],
                })
                .wait(1)
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-81, 0, 162, 36.9);

    (lib.Symbol7 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAxBVIgLAAIgMAAIgNABIAAgFQAHgBACgCQADgCAAgDIAAgEIgBgEIgHgcIgsAAIgHAYIgCAHIgBAFQAAAEAEABQADACAHABIAAAFIgLAAIgJgBIgIABIgKAAIAAgFQAGgBADgBQADgCACgDQACgEACgHIAtiUIAqCXIADAIQACADAEACIAJACIAAAFIgNgBgAAPAdIgRhIIgWBIIAnAAg"
            );
        this.shape.setTransform(153.875, 19.025);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAtBTIgMAAIgLAAIgPABIAAgGIADAAIAIgCQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIgBgDIgDgHIgihAIgIALIAAA0IACAKQAAAEAEABIAJACIAAAGIgMgBIgLAAIgMAAIgNABIAAgGIAKgCQAEgBAAgEIABgKIAAh5IgBgKQAAgDgEgCQgDgCgHAAIAAgGIAOABIALAAIALAAIANgBIAAAGQgHAAgDACQgEACAAADIgCAKIAAA5IAsg/IACgDIABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAIgKgCIAAgGIAMABIAJAAIAKAAIALgBIAAAGIgKACIgHADIgHAIIggAvIAqBPIAGAJQAEAEAEACIAIABIAAAGIgOgBg"
            );
        this.shape_1.setTransform(141.1, 19.25);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgWBMQgMgLgHgTQgGgUgBgaQABgZAGgUQAHgTAMgLQAMgLAQAAQAJAAAIAEQAHADAGAIIAHgOIAEAAIAAAxIgFAAQgEgVgJgLQgIgKgNAAQgRAAgJAVQgKAUAAAmQAAAjAKAUQAJATARAAQAPAAAIgMQAJgNABgXIAIAAQgBAcgMAQQgLAPgUABQgPgBgMgKg"
            );
        this.shape_2.setTransform(128.175, 19.275);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAxBVIgLAAIgMAAIgNABIAAgFQAHgBACgCQADgCAAgDIAAgEIgBgEIgHgcIgsAAIgHAYIgCAHIgBAFQAAAEAEABQADACAHABIAAAFIgLAAIgJgBIgIABIgKAAIAAgFQAGgBADgBQADgCACgDQACgEACgHIAtiUIAqCXIADAIQACADAEACIAJACIAAAFIgNgBgAAPAdIgRhIIgWBIIAnAAg"
            );
        this.shape_3.setTransform(115.825, 19.025);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgMBSIgLAAIgKAAIgPABIAAgFIALgDQADgBABgDIABgKIAAh5IgBgKQgBgEgDAAQgEgCgHgBIAAgFIAzAAQAMAAAIADQAJADAGAFQAFAHADAJQADAJAAAJQgBAWgLALQgMALgUABIgSAAIAAA1IABAKQABADADABIAJADIAAAFIgNgBgAgNAAIAMAAQAIAAAHgCQAGgDAEgGQADgGABgHQACgGAAgIQAAgKgDgIQgDgJgFgEQgDgDgFgBQgFgCgGAAIgNAAg"
            );
        this.shape_4.setTransform(103.825, 19.3);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAuBTIgNAAIgMAAIgOABIAAgGIADAAIAIgCQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIgBgDIgDgHIghhAIgIALIAAA0IAAAKQACAEADABIAKACIAAAGIgNgBIgLAAIgLAAIgOABIAAgGIAKgCQAEgBABgEIABgKIAAh5IgBgKQgBgDgEgCQgDgCgHAAIAAgGIAOABIALAAIAKAAIAOgBIAAAGQgHAAgDACQgDACgCADIAAAKIAAA5IArg/IACgDIAAgDQABgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAIgKgCIAAgGIAKABIAKAAIAJAAIALgBIAAAGIgJACIgHADIgHAIIghAvIArBPIAHAJQADAEADACIAJABIAAAGIgNgBg"
            );
        this.shape_5.setTransform(92, 19.25);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgRBTQgJgFgGgIQgHgGgEgLQgFgLgCgNQgDgOAAgPQABgZAGgUQAHgTAMgLQAMgKAPAAQARAAAMAKQAMALAGAUQAHATAAAcQAAAPgDAOQgDAOgGALQgFAMgHAGQgGAGgIADQgHADgIgBQgJAAgJgDgAgYg6QgJAVAAAlQAAAlAJAWQAJAUAQAAQAPAAAJgUQAJgVAAgmQAAglgJgUQgJgWgQABQgPAAgJAUg"
            );
        this.shape_6.setTransform(78.925, 19.25);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AApBSIgLAAIgKAAIgOABIAAgFIAKgDQADgBABgDIABgKIAAg6IgGAAIgKADQgEABgCAEIgFANIgPAsIgCAHIgDAIIgIAAIgGAAIgHAAIgIAAIAAgFQAHAAAEgDQADgDADgJIANgnQADgKAEgFQAFgFAHgCQgRgDgIgKQgJgLAAgRQAAgKAEgJQADgJAHgGQAFgEAIgDQAHgCAJAAIA1AAIAAAFQgHABgDACQgEAAgBAEQgBADAAAHIAAB5QAAAHABADQABADADABIALADIAAAFIgPgBgAgOhCQgHAJAAARQAAAKADAIQADAIAEAFQAEACAFACQADACAHAAIANAAIAAhIIgPAAQgMAAgIAJg"
            );
        this.shape_7.setTransform(61.075, 19.3);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAxBVIgLAAIgMAAIgNABIAAgFQAHgBACgCQADgCAAgDIAAgEIgBgEIgHgcIgsAAIgHAYIgCAHIgBAFQAAAEAEABQADACAHABIAAAFIgLAAIgJgBIgIABIgKAAIAAgFQAGgBADgBQADgCACgDQACgEACgHIAtiUIAqCXIADAIQACADAEACIAJACIAAAFIgNgBgAAPAdIgRhIIgWBIIAnAAg"
            );
        this.shape_8.setTransform(48.825, 19.025);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgPABIAAgGIALgCQADgBABgEIABgKIAAg9Ig1AAIAAA9IABAKQABAEAEABIAKACIAAAGIgOgBIgLAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAAA2IA1AAIAAg2IgBgKQgBgDgDgCQgEgCgHAAIAAgGIAPABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_9.setTransform(35.425, 19.25);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics
            .f("#FFFFFF")
            .s()
            .p("AALBSIgLAAIgKAAIgOABIAAgFIAKgDQADgBACgDQABgDAAgHIAAiIIgKAAQgHAAgFADQgEACgDAHQgDAGgDANIgFAAIAFgmIBXAAIAFAmIgFAAQgDgNgDgGQgDgHgEgCQgEgDgHAAIgKAAIAACIIAAAKQABADADABIALADIAAAFIgOgBg");
        this.shape_10.setTransform(23.25, 19.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgtBTIAAgGQAHAAADgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgDgCgHAAIAAgGIBWAAIAEAlIgGAAQgCgMgDgGQgDgHgEgCQgEgDgHAAIgbAAIAABFIAaAAQAHAAACgEQADgFAAgMIAGAAIAAAwIgGAAQAAgMgDgEQgDgFgHAAIgZAAIAAA9QAAAJADADQACACAHABIAOAAQAIAAAEgDQAFgDADgHQADgHADgNIAFAAIgEAog"
            );
        this.shape_11.setTransform(12.175, 19.275);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgxBTIAAgGQAHAAAEgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgEgCgHAAIAAgGIA0AAQAKAAAIACQAHADAFAGQAFAFACAIQADAIAAAIQAAANgGAKQgFAJgMAFQAOAEAIAJQAHALAAARQABANgHALQgGAMgJAGQgGADgGABQgHABgIAAgAgOA/QAAAIACACQACACAHABIAEAAQAOgBAHgKQAIgKAAgTQAAgKgDgIQgCgIgFgEQgDgDgFgCQgFgBgGAAIgPAAgAgOgHIAKAAQAJAAAFgCQAGgDADgGQADgEAAgGQACgGAAgIQAAgJgCgIQgCgHgFgEQgCgCgFgCIgJgBIgNAAg"
            );
        this.shape_12.setTransform(0.9, 19.275);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA4BkQgBgSgIgIQgIgHgUABIhPAAIAAgHQAGAAAEgBQADgCABgEIACgJIAAh5IgCgKQgBgDgDgCQgEgCgGAAIAAgGIANABIAMABIALgBIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB3QAAAIACADQABAEAGABIARABIASgBQAGgBABgEQACgDAAgIIAAh3IgBgKQgBgDgEgCQgDgCgHAAIAAgGIAOABIAMABIAKgBIAOgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB3IABALQABAEADACIAKABIAAAng"
            );
        this.shape_13.setTransform(-11.6, 20.85);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAsBTIgLAAIgLAAIgPABIAAgGIADAAIABAAIAIgCQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAAgFIgEgIIgUgwIgZAyIgDAHIgBAEQAAABAAABQAAAAAAABQABAAAAABQABAAAAABQAEABAGAAIAAAGIgKAAIgKgBIgJABIgKAAIAAgGQAIAAAEgEQAFgEAGgLIAeg6Igcg/IgFgJQgCgCgEgCQgCgCgHAAIAAgGIANABIAMAAIANAAIAMgBIAAAGIgJACQgBABgBAAQAAABgBAAQAAABAAAAQAAABAAAAIAAAFIACADIASAsIAVgsIADgEIAAgEQAAgCgDgCQgDgCgHAAIAAgGIAKABIAKAAIAJAAIALgBIAAAGIgKACQgDABgCACIgGAIIgbA2IAgBIIAFAKQACADAEACIAKABIAAAGIgQgBg"
            );
        this.shape_14.setTransform(-24.75, 19.25);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgmBSQgDgDAAgGQAAgFACgDQADgDAFAAIADABIAEADIACACIACABQAFAAAEgFQADgGAEgLIghhuQgDgHgEgEQgEgEgIAAIAAgGIANABIAMAAIAMAAIANgBIAAAGQgIAAgDACQgDACAAACIABAEIABAEIAXBSIAahSIACgEIAAgEQAAgCgDgCQgDgCgIAAIAAgGIALABIAIAAIAJAAIAKgBIAAAGQgIABgEADQgEADgCAHIgiBpQgHAYgIAKQgIAKgKAAQgGgBgEgCg"
            );
        this.shape_15.setTransform(-36.875, 19.35);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgxBTIAAgGQAIAAADgCQADgBACgEIAAgJIAAh5IAAgKQgCgDgDgBQgDgCgIAAIAAgGIAzAAQALAAAIACQAIADAEAGQAFAFACAIQADAIAAAIQAAANgGAKQgFAJgMAFQAOAEAIAJQAHALAAARQAAANgFALQgGAMgKAGQgGADgGABQgHABgIAAgAgOA/QAAAIACACQACACAHABIAEAAQAOgBAHgKQAIgKAAgTQAAgKgDgIQgCgIgFgEQgDgDgFgCQgFgBgGAAIgPAAgAgOgHIAKAAQAJAAAFgCQAGgDADgGQACgEABgGQACgGAAgIQAAgJgDgIQgBgHgFgEQgCgCgEgCIgJgBIgOAAg"
            );
        this.shape_16.setTransform(-48.85, 19.275);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA4BkQAAgTgJgHQgJgIgTABIglAAQgUAAgIAHQgIAHgBATIgGAAIAAgnQALgBAGgEQAGgGADgKQADgIACgMIADgaIADggIABghQAAgJgBgFQgBgEgEgBQgDgCgHgBIAAgFIBkAAIAAAFQgGABgEACQgDAAgBAEQgBADAAAHIAAB4QgBAGABAEQACADADACQAEACAGAAIAAAngAgJhaQgEABgBAIIgBAVQgBAngEAaQgDAbgGAPIAAADIgBACQAAAEAIACQAIABATAAIAOgBQAFgBABgDQACgEAAgHIAAh2QAAgHgCgEQgBgDgFgBIgOgBIgFAAIgJABg"
            );
        this.shape_17.setTransform(-61.4, 20.9);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.shape_17 },
                        { t: this.shape_16 },
                        { t: this.shape_15 },
                        { t: this.shape_14 },
                        { t: this.shape_13 },
                        { t: this.shape_12 },
                        { t: this.shape_11 },
                        { t: this.shape_10 },
                        { t: this.shape_9 },
                        { t: this.shape_8 },
                        { t: this.shape_7 },
                        { t: this.shape_6 },
                        { t: this.shape_5 },
                        { t: this.shape_4 },
                        { t: this.shape_3 },
                        { t: this.shape_2 },
                        { t: this.shape_1 },
                        { t: this.shape },
                    ],
                })
                .wait(1)
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69.6, 0, 232.1, 36.9);

    (lib.Symbol6 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AApBSIgLAAIgKAAIgOABIAAgFIAKgDQADgBABgDIABgKIAAg6IgGAAIgKADQgEABgCAEIgFANIgPAsIgCAHIgDAIIgIAAIgGAAIgHAAIgIAAIAAgFQAHAAAEgDQADgDADgJIANgnQADgKAEgFQAFgFAHgCQgRgDgIgKQgJgLAAgRQAAgKAEgJQADgJAHgGQAFgEAIgDQAHgCAJAAIA1AAIAAAFQgHABgDACQgEAAgBAEQgBADAAAHIAAB5QAAAHABADQABADADABIALADIAAAFIgPgBgAgOhCQgHAJAAARQAAAKADAIQADAIAEAFQAEACAFACQADACAHAAIANAAIAAhIIgPAAQgMAAgIAJg"
            );
        this.shape.setTransform(61.225, 19.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAxBVIgLAAIgMAAIgNABIAAgFQAHgBACgCQADgCAAgDIAAgEIgBgEIgHgcIgsAAIgHAYIgCAHIgBAFQAAAEAEABQADACAHABIAAAFIgLAAIgJgBIgIABIgKAAIAAgFQAGgBADgBQADgCACgDQACgEACgHIAtiUIAqCXIADAIQACADAEACIAJACIAAAFIgNgBgAAPAdIgRhIIgWBIIAnAAg"
            );
        this.shape_1.setTransform(48.975, 19.025);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgPABIAAgGIALgCQADgBABgEIABgKIAAg9Ig1AAIAAA9IABAKQABAEAEABIAKACIAAAGIgOgBIgLAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAAA2IA1AAIAAg2IgBgKQgBgDgDgCQgEgCgHAAIAAgGIAPABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_2.setTransform(35.575, 19.25);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgMBSIgLAAIgKAAIgPABIAAgFIALgDQADgBABgDIABgKIAAh5IgBgKQgBgEgDAAQgEgCgHgBIAAgFIAzAAQAMAAAIADQAJADAGAFQAFAHADAJQADAJAAAJQgBAWgLALQgMALgUABIgSAAIAAA1IABAKQABADADABIAJADIAAAFIgNgBgAgNAAIAMAAQAIAAAHgCQAGgDAEgGQADgGABgHQACgGAAgIQAAgKgDgIQgDgJgFgEQgDgDgFgBQgFgCgGAAIgNAAg"
            );
        this.shape_3.setTransform(23.275, 19.3);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAxBVIgLAAIgMAAIgNABIAAgFQAHgBACgCQADgCAAgDIAAgEIgBgEIgHgcIgsAAIgHAYIgCAHIgBAFQAAAEAEABQADACAHABIAAAFIgLAAIgJgBIgIABIgKAAIAAgFQAGgBADgBQADgCACgDQACgEACgHIAtiUIAqCXIADAIQACADAEACIAJACIAAAFIgNgBgAAPAdIgRhIIgWBIIAnAAg"
            );
        this.shape_4.setTransform(11.225, 19.025);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AA4BkQgBgTgIgHQgJgIgTABIglAAQgTAAgJAHQgIAHgBATIgGAAIAAgnQALgBAGgEQAFgGAEgKIAFgUIADgaIADggIAAghQABgJgBgFQgBgEgDgBQgEgCgHgBIAAgFIBlAAIAAAFQgIABgCACQgEAAgBAEQgBADAAAHIAAB4QAAAGAAAEQABADAEACQADACAIAAIAAAngAgJhaQgDABgCAIIgBAVQgCAngDAaQgDAbgGAPIAAADIgBACQAAAEAIACQAJABASAAIAOgBQAFgBACgDQABgEAAgHIAAh2QAAgHgBgEQgCgDgFgBIgOgBIgFAAIgJABg"
            );
        this.shape_5.setTransform(-2.2, 20.9);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AAvBTIgKAAIgLAAIgPABIAAgGIALgCQADgBABgEIABgKIAAg9Ig1AAIAAA9IABAKQABAEAEABIAKACIAAAGIgOgBIgLAAIgLAAIgOABIAAgGIAKgCQADgBACgEIABgKIAAh5IgBgKQgCgDgDgCQgDgCgHAAIAAgGIAOABIALAAIALAAIAOgBIAAAGQgHAAgDACQgEACgBADIgBAKIAAA2IA1AAIAAg2IgBgKQgBgDgDgCQgEgCgHAAIAAgGIAPABIALAAIALAAIANgBIAAAGQgGAAgEACQgDACgBADIgBAKIAAB5IABAKQABAEADABIAKACIAAAGIgOgBg"
            );
        this.shape_6.setTransform(-15.225, 19.25);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgtBTIAAgGQAHAAADgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgDgCgHAAIAAgGIBWAAIAEAlIgGAAQgCgMgDgGQgDgHgEgCQgEgDgHAAIgbAAIAABFIAaAAQAHAAACgEQADgFAAgMIAGAAIAAAwIgGAAQAAgMgDgEQgDgFgHAAIgZAAIAAA9QAAAJADADQACACAHABIAOAAQAIAAAEgDQAFgDADgHQADgHADgNIAFAAIgEAog"
            );
        this.shape_7.setTransform(-27.775, 19.275);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics
            .f("#FFFFFF")
            .s()
            .p("AgJBSIgLAAIgKAAIgPABIAAgFIALgDQADgBABgDIABgKIAAh5IgBgKQgBgEgDAAQgDgCgIgBIAAgFIBXAAIADAlIgFAAQgDgMgDgGQgDgHgEgCQgEgDgIAAIgZAAIAACIIABAKQABADAEABIAJADIAAAFIgOgBg");
        this.shape_8.setTransform(-37.9, 19.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgtBTIAAgGQAHAAADgCQADgBACgEIABgJIAAh5IgBgKQgCgDgDgBQgDgCgHAAIAAgGIBWAAIAEAlIgGAAQgCgMgDgGQgDgHgEgCQgEgDgHAAIgbAAIAABFIAaAAQAHAAACgEQADgFAAgMIAGAAIAAAwIgGAAQAAgMgDgEQgDgFgHAAIgZAAIAAA9QAAAJADADQACACAHABIAOAAQAIAAAEgDQAFgDADgHQADgHADgNIAFAAIgEAog"
            );
        this.shape_9.setTransform(-48.875, 19.275);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "Ag7BQQgEgDAAgGQAAgFADgDQADgEAEABQAEAAABABIAEAEIABACIABABQAEgBADgGQAEgIACgNIADgTIADgYIACgbIAAgZQAAgKAAgFQgCgEgDgBQgDgCgIgBIAAgFIBlAAIAAAFQgHABgDACQgDAAgBAEQgCADABAHIAAB5QgBAHACADQAAAEADABIALACIAAAGIgOgCIgLAAIgLAAIgOACIAAgGIAKgCQADgBACgEIABgKIAAh4QAAgHgCgEQgBgDgFgBIgPgBQgIAAgEACQgFABgCAHIAAAWIgCAfIgDAcIgDAWQgEAZgHALQgIAMgKgBQgHAAgDgEg"
            );
        this.shape_10.setTransform(-61.3, 19.4);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.shape_10 },
                        { t: this.shape_9 },
                        { t: this.shape_8 },
                        { t: this.shape_7 },
                        { t: this.shape_6 },
                        { t: this.shape_5 },
                        { t: this.shape_4 },
                        { t: this.shape_3 },
                        { t: this.shape_2 },
                        { t: this.shape_1 },
                        { t: this.shape },
                    ],
                })
                .wait(1)
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69.7, 0, 139.4, 36.9);

    (lib.Symbol4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["#000000", "rgba(0,0,0,0)"], [0, 1], 0, 0, 0, 0, 0, 206.8).s().p("A2iWiQpVpVAAtNQAAtMJVpVQJWpWNMAAQNNAAJWJWQJVJVAANMQAANNpVJVQpWJWtNAAQtMAApWpWg");
        this.shape.setTransform(0, 204);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-204, 0, 408, 408);
    
    // MAYBACH
    
    (lib.ClipGroup = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("MAYBACH");
        mask.setTransform(60.65, 5.65);

        // Layer_3
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "MAYBACH"
            );
        this.shape.setTransform(60.65, 5.65);

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0, 0, 121.3, 10), null);

    (lib.blk = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("Eim0AniMAAAhPDMFNpAAAMAAABPDg");
        this.shape.setTransform(0, 38.95);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = getMCSymbolPrototype(lib.blk, new cjs.Rectangle(-1067.6, -214, 2135.3, 506), null);

    (lib._GUIDE_BACKGROUND = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,0,0,0.298)").s().p("AkrEsIAApXIJXAAIAAJXg");
        this.shape.setTransform(30, 30);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = getMCSymbolPrototype(lib._GUIDE_BACKGROUND, new cjs.Rectangle(0, 0, 60, 60), null);

    (lib.Symbol20 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.Symbol7("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-0.1, 18.4, 1, 1, 0, 0, 0, -0.1, 18.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69.6, 0, 232.1, 36.9);

    (lib.Symbol19 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.Symbol6("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(0, 18.4, 1, 1, 0, 0, 0, 0, 18.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69.7, 0, 139.4, 36.9);

    (lib.Symbol5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_4
        this.instance = new lib.Symbol11("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(92.4, 49.8, 1, 1, 0, 0, 0, -0.1, 18.4);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance).wait(336).to({ _off: false }, 0).to({ x: -17.6, alpha: 1 }, 19, cjs.Ease.backOut).wait(104).to({ startPosition: 0 }, 0).to({ _off: true }, 1).wait(23)
        );

        // Symbol 10
        this.instance_1 = new lib.Symbol10("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(93.35, 18.4, 1, 1, 0, 0, 0, -0.1, 18.4);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_1).wait(330).to({ _off: false }, 0).to({ x: -16.65, alpha: 1 }, 19, cjs.Ease.backOut).wait(110).to({ startPosition: 0 }, 0).to({ _off: true }, 1).wait(23)
        );

        // УПРАВЛЕНИЕ
        this.instance_2 = new lib.Symbol13("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(76.4, 49.6, 1, 1, 0, 0, 0, -0.1, 18.4);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_2)
                .wait(226)
                .to({ _off: false }, 0)
                .to({ x: -33.6, alpha: 1 }, 19, cjs.Ease.backOut)
                .wait(64)
                .to({ startPosition: 0 }, 0)
                .to({ x: -163.6, alpha: 0 }, 19, cjs.Ease.cubicIn)
                .wait(131)
                .to({ startPosition: 0 }, 0)
                .to({ _off: true }, 1)
                .wait(23)
        );

        // КОМФОРТНОЕ
        this.instance_3 = new lib.Symbol12("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(79.2, 18.4, 1, 1, 0, 0, 0, -0.1, 18.4);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_3)
                .wait(220)
                .to({ _off: false }, 0)
                .to({ x: -30.8, alpha: 1 }, 19, cjs.Ease.backOut)
                .wait(64)
                .to({ startPosition: 0 }, 0)
                .to({ x: -160.8, alpha: 0 }, 19, cjs.Ease.cubicIn)
                .wait(137)
                .to({ startPosition: 0 }, 0)
                .to({ _off: true }, 1)
                .wait(23)
        );

        // СИДЕНЬЯ
        this.instance_4 = new lib.Symbol16("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(58.05, 49.6, 1, 1, 0, 0, 0, 0, 18.4);
        this.instance_4.alpha = 0;
        this.instance_4._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_4)
                .wait(112)
                .to({ _off: false }, 0)
                .to({ x: -51.95, alpha: 1 }, 19, cjs.Ease.backOut)
                .wait(64)
                .to({ startPosition: 0 }, 0)
                .to({ x: -181.95, alpha: 0 }, 19, cjs.Ease.cubicIn)
                .to({ _off: true }, 13)
                .wait(256)
        );

        // МУЛЬТИКОНТУРНЫЕ
        this.instance_5 = new lib.Symbol15("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(110, 18.4, 1, 1, 0, 0, 0, 0, 18.4);
        this.instance_5.alpha = 0;
        this.instance_5._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_5)
                .wait(106)
                .to({ _off: false }, 0)
                .to({ x: 0, alpha: 1 }, 19, cjs.Ease.backOut)
                .wait(64)
                .to({ startPosition: 0 }, 0)
                .to({ x: -130, alpha: 0 }, 19, cjs.Ease.cubicIn)
                .to({ _off: true }, 19)
                .wait(256)
        );

        // Symbol 7
        this.instance_6 = new lib.Symbol20("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(81.8, 49.6, 1, 1, 0, 0, 0, -0.1, 18.4);
        this.instance_6.alpha = 0;
        this.instance_6._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_6)
                .wait(5)
                .to({ _off: false }, 0)
                .to({ x: -28.2, alpha: 1 }, 19, cjs.Ease.backOut)
                .wait(64)
                .to({ startPosition: 0 }, 0)
                .to({ x: -158.2, alpha: 0 }, 19, cjs.Ease.cubicIn)
                .to({ _off: true }, 7)
                .wait(369)
        );

        // Symbol 6
        this.instance_7 = new lib.Symbol19("synched", 0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(82.15, 18.4, 1, 1, 0, 0, 0, 0, 18.4);
        this.instance_7.alpha = 0;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_7)
                .to({ x: -27.85, alpha: 1 }, 19, cjs.Ease.backOut)
                .wait(64)
                .to({ startPosition: 0 }, 0)
                .to({ x: -157.85, alpha: 0 }, 19, cjs.Ease.cubicIn)
                .to({ _off: true }, 12)
                .wait(369)
        );
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-227.7, 0, 527, 129.1);

    (lib.scale_right = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_2
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(2, 1, 1).p("AAAzhMAAAAnD");
        this.shape.setTransform(0, 124.95);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(473));

        // Layer_1
        this.instance = new lib.ClipGroup();
        this.instance.parent = this;
        this.instance.setTransform(-32.55, 61.05, 0.7419, 0.7389, -90.0012, 0, 0, 60.6, 5.8);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(347).to({ _off: false }, 0).to({ alpha: 1 }, 14).wait(96).to({ alpha: 0 }, 15).wait(1));

        // t2
        this.instance_1 = new lib.Symbol22();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-35.35, 75.5, 1, 1, 0, 0, 0, 0, 113.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(335).to({ alpha: 0 }, 12).wait(126));

        // Layer_1
        this.instance_2 = new lib.Tween4123("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-31.9, 218, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(473));

        // black
        this.instance_3 = new lib.Symbol9123();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-31.9, 50);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(473));

        // GUIDE_BACKGROUND
        this.guide_background_mc = new lib._GUIDE_BACKGROUND();
        this.guide_background_mc.name = "guide_background_mc";
        this.guide_background_mc.parent = this;
        this.guide_background_mc.setTransform(-30, 30, 1, 1, 0, 0, 0, 30, 30);
        this.guide_background_mc.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.guide_background_mc).wait(473));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-63.9, -150, 64.9, 401);

    (lib.main_mc = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // black
        this.instance = new lib.blk();
        this.instance.parent = this;
        this.instance.setTransform(149.85, 250, 1.25, 1.25);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance)
                .wait(86)
                .to({ _off: false }, 0)
                .to({ alpha: 1 }, 25)
                .to({ alpha: 0 }, 27)
                .to({ _off: true }, 1)
                .wait(183)
                .to({ _off: false }, 0)
                .to({ alpha: 1 }, 25)
                .to({ alpha: 0 }, 27)
                .to({ _off: true }, 1)
                .wait(98)
        );

        // Layer_6
        this.instance_1 = new lib.Symbol24();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 125, 1, 1, 0, 0, 0, 0, 125);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(347).to({ _off: false }, 0).wait(126));

        // Layer_4
        this.instance_2 = new lib.Symbol25();
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 125, 1, 1, 0, 0, 0, 0, 125);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(111).to({ _off: false }, 0).to({ _off: true }, 236).wait(126));

        // Layer_3
        this.instance_3 = new lib.Symbol23();
        this.instance_3.parent = this;
        this.instance_3.setTransform(0.15, 125, 1, 1, 0, 0, 0, 0, 125);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ _off: true }, 111).wait(362));

        // bg
        this.instance_4 = new lib.Symbol11123("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 125, 1, 1.112);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(473));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1250, -17.6, 2734.4, 632.6);

    (lib.but = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_3
        this.instance = new lib.Tween5("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(56.8, 15.5);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ _off: false }, 0).to({ alpha: 0.3203 }, 10).to({ startPosition: 0 }, 5).to({ alpha: 0 }, 4).to({ _off: true }, 1).wait(37));

        // txt
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgQAkQgHgFgEgJQgEgJAAgMQAAgMAEgJQAEgJAHgGQAIgFAJAAQAJAAAHAFQAHAFAEAJQAEAJAAAMIAAAAIAAACIg0AAQABAOAFAIQAGAHAKAAQAGAAAEgDQAEgCAEgHIAKACQgDAKgIAFQgHAFgLAAQgJAAgIgFgAAUgGQgBgMgFgGQgFgGgJAAQgHAAgFAGQgGAGgBAMIAnAAIAAAAg"
            );
        this.shape.setTransform(90.375, 15.675);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgQAkQgHgFgEgJQgEgJAAgMQAAgMAEgJQAEgJAHgGQAIgFAJAAQAJAAAHAFQAHAFAEAJQAEAJAAAMIAAAAIAAACIg0AAQABAOAFAIQAGAHAKAAQAGAAAEgDQAEgCAEgHIAKACQgDAKgIAFQgHAFgLAAQgJAAgIgFgAAUgGQgBgMgFgGQgFgGgJAAQgHAAgFAGQgGAGgBAMIAnAAIAAAAg"
            );
        this.shape_1.setTransform(82.425, 15.675);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AASAnIAAglIgjAAIAAAlIgLAAIAAhNIALAAIAAAgIAjAAIAAggIALAAIAABNg");
        this.shape_2.setTransform(74.325, 15.675);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgMA1QgFgDgEgEQgGgGgDgJQgDgJAAgNQAAgQADgNQAEgOAFgHQAFgHAFgDQAGgDAHAAIACAAIAEAAIAHABIACAAIADAAIAEAAIACgCIAAAKQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgFAAIgCAAIgDAAIgGgBIgEAAQgFAAgEADQgEABgDAGIgEAJIgDANQAFgHAFgDQAGgDAHAAQAJAAAHAFQAHAFAEAJQADAJABAMQAAAMgEAJQgFAJgIAFQgHAGgKgBQgGAAgGgCgAgKgLQgFAEgDAGQgDAHAAAJQAAANAGAJQAGAJAJgBQAKABAGgJQAGgIAAgOQAAgOgGgIQgFgIgKAAQgGAAgFAEg"
            );
        this.shape_3.setTransform(66.05, 14.2);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgRAjQgHgFgFgJQgEgJAAgMQAAgLAEgJQAFgJAHgFQAIgGAJAAQAKAAAHAFQAIAGAEAJQAEAJABALQgBAMgEAJQgEAJgIAFQgHAGgKAAQgJAAgIgGgAgLgaQgFAEgCAHQgDAHAAAIQAAAOAGAIQAGAJAJAAQAKAAAGgJQAGgIAAgOQAAgNgGgIQgGgJgKAAQgGAAgFAEg"
            );
        this.shape_4.setTransform(57.825, 15.675);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgeA4IAAhWIAAgLIgBgGIgBgGIALAAIABAEIABADIAAAFQAEgHAGgDQAFgEAGAAQAJAAAHAFQAHAGAEAJQADAJAAAMQAAAMgDAJQgEAJgGAFQgHAFgJAAQgGAAgGgDQgFgDgEgHIAAArgAgNgkQgGAIAAAOQAAAJADAGQADAHAEAEQAFAEAFAAQAKAAAEgIQAGgIgBgNQABgPgGgIQgFgJgJAAQgIAAgGAJg"
            );
        this.shape_5.setTransform(49.7, 17.175);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AAbAvIAAgRIg1AAIAAARIgLAAIAAgaIABAAQAFAAADgCQADgCABgFIABgDIABgGIABgIIADgpIAuAAIAABDIAKAAIAAAagAgJgGIgBANIgCAIIgEAGIAgAAIAAg5IgXAAg");
        this.shape_6.setTransform(41.375, 16.5);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AgRAjQgHgFgFgJQgEgJAAgMQAAgLAEgJQAFgJAHgFQAIgGAJAAQAKAAAHAFQAIAGAEAJQAEAJABALQgBAMgEAJQgEAJgIAFQgHAGgKAAQgJAAgIgGgAgLgaQgFAEgCAHQgDAHAAAIQAAAOAGAIQAGAJAJAAQAKAAAGgJQAGgIAAgOQAAgNgGgIQgGgJgKAAQgGAAgFAEg"
            );
        this.shape_7.setTransform(33.425, 15.675);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AAaA2IAAhhIgyAAIAABhIgNAAIAAhrIBLAAIAABrg");
        this.shape_8.setTransform(24.125, 14.125);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics
            .f("#FFFFFF")
            .s()
            .p(
                "AhnBHIAAhWIAAgLIAAgHIgBgFIALAAIABADIAAADIAAAGQAEgIAGgCQAFgEAHAAQAJAAAHAFQAHAGAEAJQAEAJAAALQAAAMgEAJQgEAKgGAFQgHAEgJAAQgHAAgGgDQgFgDgEgGIAAArgAhWgWQgGAIAAAOQAAAJADAHQADAHAEAEQAFADAGAAQAKAAAFgIQAFgHAAgOQAAgOgFgJQgGgIgJAAQgJAAgGAIgAiAA3IAAgRIg2AAIAAARIgLAAIAAgaIABAAQAFAAADgCQADgCABgFIABgDIABgGIABgJIADgoIAvAAIAABDIAKAAIAAAagAilABIgBAOIgCAIIgEAGIAhAAIAAg5IgYAAgAE9AkQgHgFgEgJQgEgJAAgMQAAgMAEgJQAEgJAHgGQAIgFAKAAQAJAAAHAFQAHAFAEAIQAEAKAAAMIAAAAIAAACIg1AAQABAOAFAIQAGAGALAAQAGABAEgDQAEgDAEgGIAKABQgDALgIAFQgHAEgLAAQgKAAgIgEgAFigGQgBgMgFgGQgFgHgJAAQgIAAgFAHQgGAGgBAMIAoAAIAAAAgADuAkQgIgFgEgJQgEgJAAgMQAAgMAEgJQAEgJAIgGQAHgFAKAAQAKAAAHAFQAHAFAEAIQAEAKAAAMIAAAAIgBACIg0AAQAAAOAGAIQAGAGAKAAQAGABAFgDQAEgDADgGIALABQgEALgHAFQgHAEgLAAQgKAAgIgEgAETgGQgBgMgFgGQgFgHgJAAQgJAAgFAHQgFAGgCAMIApAAIAAAAgABOAmQgGgDgEgEQgGgGgCgJQgDgJAAgMQAAgRADgNQADgOAGgHQAEgHAGgDQAGgDAIAAIACAAIAEAAIAGABIADAAIACAAIAEAAIADgCIAAAKQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgFAAIgCAAIgEAAIgFgBIgEAAQgGAAgEADQgEABgDAGIgEAJIgDANQAFgHAFgDQAGgDAHAAQAKAAAHAFQAHAFAEAJQADAKABALQgBAMgEAJQgEAJgIAFQgHAGgKgBQgHAAgGgCgABQgaQgFAEgDAGQgDAIAAAIQAAANAGAJQAGAJAKgBQAKABAGgJQAGgIAAgOQAAgNgGgJQgGgIgJAAQgHAAgFAEgAgIAjQgIgFgEgJQgEgKAAgLQAAgMAEgIQAEgKAIgFQAHgFAJAAQAKAAAIAFQAHAGAFAJQAEAJAAALQAAAMgEAJQgFAJgHAFQgIAGgKgBQgJABgHgGgAgCgaQgFAEgDAGQgDAIAAAIQAAANAGAJQAGAJAJgBQAKABAGgJQAGgIAAgOQAAgNgGgJQgGgIgKAAQgGAAgEAEgAj8AjQgIgFgEgJQgEgKAAgLQAAgMAEgIQAEgKAIgFQAHgFAKAAQAKAAAIAFQAHAGAFAJQAEAJAAALQAAAMgEAJQgFAJgHAFQgIAGgKgBQgKABgHgGgAj2gaQgFAEgDAGQgDAIAAAIQAAANAGAJQAGAJAKgBQAKABAGgJQAGgIAAgOQAAgNgGgJQgGgIgKAAQgGAAgFAEgADAAmIAAgkIgkAAIAAAkIgMAAIAAhMIAMAAIAAAgIAkAAIAAggIALAAIAABMgAkuAmIAAhhIgzAAIAABhIgMAAIAAhrIBLAAIAABrg"
            );
        this.shape_9.setTransform(56.975, 15.7);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [
                        { t: this.shape_8 },
                        { t: this.shape_7 },
                        { t: this.shape_6 },
                        { t: this.shape_5 },
                        { t: this.shape_4 },
                        { t: this.shape_3 },
                        { t: this.shape_2 },
                        { t: this.shape_1 },
                        { t: this.shape },
                    ],
                })
                .to({ state: [{ t: this.shape_9 }] }, 52)
                .to({ state: [] }, 1)
                .wait(5)
        );

        // Layer_2
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f().s("#FFFFFF").ss(1, 0, 0, 3).p("Ao0iaIRpAAIAAE1IxpAAg");
        this.shape_10.setTransform(56.5, 15.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(52).to({ _off: true }, 1).wait(5));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1, -1, 119, 33);

    (lib.scale_left = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_2
        this.instance = new lib.blk();
        this.instance.parent = this;
        this.instance.setTransform(1329.55, 244, 1.25, 1.25);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ alpha: 0 }, 17).to({ _off: true }, 1).wait(439).to({ _off: false }, 0).to({ alpha: 1 }, 15).wait(1));

        // button
        this.instance_1 = new lib.but("single", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(78.1, 200);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(
            cjs.Tween.get(this.instance_1).wait(356).to({ _off: false }, 0).to({ x: 20.75, alpha: 1 }, 15, cjs.Ease.backOut).wait(49).to({ y: 199.95, mode: "synched", loop: false }, 0).wait(53)
        );

        // Layer_8
        this.instance_2 = new lib.Symbol5("synched", 0, false);
        this.instance_2.parent = this;
        this.instance_2.setTransform(156.65, 98, 1.4404, 1.4404, 0, 0, 0, 0.2, 65);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({ _off: false }, 0).wait(460));

        // Layer_7
        this.instance_3 = new lib.Symbol4("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-17, -121.1, 2.0394, 1.6225, 0, 0, 0, 0, 203.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(473));

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AjhDiIAAnDIHDAAIAAHDg");
        this.shape.setTransform(22.6, 22.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).to({ _off: true }, 109).wait(364));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-433, -451.9, 3097.1, 1060.9);

    // stage content:
    (lib._100pr960x250 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            this.stop();

            var originWidth = 960;

            var _this = this;
            var canvasWidth = canvas.width;
            var canvasHeight = canvas.height;

            window.innerHeight = 250;

            window.addEventListener("resize", resize, false);
            function resize() {
                canvas.width = window.innerWidth * window.devicePixelRatio;
                canvas.height = window.innerHeight * window.devicePixelRatio;

                canvas.style.width = window.innerWidth + "px";
                canvas.style.height = window.innerHeight + "px";
                stage.scaleX = stage.scaleY = window.devicePixelRatio;

                _this.left_mc.x = 0;
                _this.center_mc.x = Math.round(window.innerWidth / 2);
                _this.right_mc.x = window.innerWidth;

                /*if (innerWidth < 1200) {
					_this.left_mc.visible = true;
			        _this.left_mc2.visible = false;
					
				}
				else
				{
					_this.left_mc.visible = false;
					_this.left_mc2.visible = true;
					}	*/
            }

            resize();
        };

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(1, 1, 1).p("Ei6lATiMAAAgnDEC6mATiMl1HAAAEi6hgThMF1HAAA");
        this.shape.setTransform(1194.2, 125);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // scale_left_mc
        this.left_mc = new lib.scale_left();
        this.left_mc.name = "left_mc";
        this.left_mc.parent = this;
        this.left_mc.setTransform(0, 31, 1, 1, 0, 0, 0, 0, 31);

        this.timeline.addTween(cjs.Tween.get(this.left_mc).wait(1));

        // scale_right_mc
        this.right_mc = new lib.scale_right();
        this.right_mc.name = "right_mc";
        this.right_mc.parent = this;
        this.right_mc.setTransform(960, 31, 1, 1, 0, 0, 0, 0, 31);

        this.timeline.addTween(cjs.Tween.get(this.right_mc).wait(1));

        // main_mc
        this.center_mc = new lib.main_mc();
        this.center_mc.name = "center_mc";
        this.center_mc.parent = this;
        this.center_mc.setTransform(485, 0);

        this.timeline.addTween(cjs.Tween.get(this.center_mc).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-285, -326.9, 2949.1, 935.9);
    // library properties:
    lib.properties = {
        id: "23AB9DC9192D8742A513F837669865D8",
        width: 960,
        height: 250,
        fps: 30,
        color: "#FFFFFF",
        opacity: 1.0,
        manifest: [{ src: "index_atlas_NP_.jpg", id: "index_atlas_NP_" }],
        preloads: [],
    };

    // bootstrap callback support:

    (lib.Stage = function (canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
    };
    p.play = function () {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
    };
    p.stop = function (ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    };
    p.seek = function (ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
    };
    p.getDuration = function () {
        return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
    };

    p.getTimelinePosition = function () {
        return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
    };

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions["23AB9DC9192D8742A513F837669865D8"] = {
        getStage: function () {
            return exportRoot.getStage();
        },
        getLibrary: function () {
            return lib;
        },
        getSpriteSheet: function () {
            return ss;
        },
        getImages: function () {
            return img;
        },
    };

    an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    };

    an.getComposition = function (id) {
        return an.compositions[id];
    };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
