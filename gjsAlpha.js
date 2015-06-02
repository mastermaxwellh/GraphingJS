console.log("Graphing.js version 0.6.4, author Maxwell Heath. Warning: This version is considered unstable. Some parts of it may not function as the developers intended.");

var Ray = function (id, endPointX, endPointY, direction) {
    this.id = id;
    this.direction = direction;
    this.endPoint = {
        x : endPointX,
        y : endPointY
    };
    this.translate = function (xChange, yChange) {
        this.endPoint.x += xChange;
        this.endPoint.y += yChange;
    };
};

var Line = function (id, yInterceptX, yInterceptY, xInterceptX, xInterceptY) {
    this.id = id;
    
    this.yIntercept = {
        x : yInterceptX,
        y : yInterceptY
    };
    this.xIntercept = {
        x : xInterceptX,
        y : xInterceptY
    };
    
    this.rule = null;
    
    this.translate = function (xChange, yChange) {
        this.yIntercept.x += xChange;
        this.yIntercept.y += yChange;
        this.xIntercept.x += xChange;
        this.yIntercept.y += yChange;
    };
};

var Point = function (id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.translate = function (xChange, yChange) {
        this.x += xChange;
        this.y += yChange;
    };
    this.rotate = function (centerX, centerY) {
        
    };
};

var System = function (id) {
    this.id = id;
    this.lines = [
        
    ];
    
    this.addLine = function (yInterceptX, yInterceptY, xInterceptX, xInterceptY) {
        this.lines.push({
            rule: null,
            xIntercept: {
                x: xInterceptX,
                y: xInterceptY
            },
            yIntercept: {
                x: yInterceptX,
                y: yInterceptY
            }
        });
    };
};

var ScatterPlot = function (id) {
    this.id = id;
    this.lineOfBestFit = null;
    this.points = [
    
    ];
    this.newPoint = function (x, y) {
        this.points.push({
            x: x,
            y: y
        });
    };
};

console.log("Graphing.js run successfully. Graphing commands may now be used.");
