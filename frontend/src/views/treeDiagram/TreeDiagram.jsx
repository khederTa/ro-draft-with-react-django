/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./TreeDiagram.css";
import treeData from "./treeData.json";

const TreeDiagram = () => {
  const svgRef = useRef();

  useEffect(() => {
    if (!treeData) return; // Don't run if the data hasn't loaded yet

    const margin = { top: 10, right: 45, bottom: 15, left: 45 },
      treeWidth = 800,
      treeHeight = 400;

    // Clear the SVG content before adding new tree
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", treeWidth + margin.right + margin.left)
      .attr("height", treeHeight + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const treemap = d3.tree().size([treeHeight, treeWidth]);

    const root = d3.hierarchy(treeData, (d) => d.children);
    root.x0 = treeHeight / 2;
    root.y0 = 0;

    let i = 0;
    root.children.forEach(collapse);

    update(root);

    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    function update(source) {
      const treeData = treemap(root);

      const nodes = treeData.descendants(),
        links = treeData.descendants().slice(1);

      nodes.forEach((d) => {
        d.y = d.depth * 180;
      });

      const node = svg
        .selectAll("g.node")
        .data(nodes, (d) => d.id || (d.id = ++i));

      const nodeEnter = node
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", (d) => `translate(${source.y0},${source.x0})`)
        .on("click", click);

      nodeEnter
        .append("circle")
        .attr("class", "node")
        .attr("r", 1e-6)
        .style("fill", (d) => (d._children ? "lightsteelblue" : "#fff"));

      nodeEnter
        .append("text")
        .attr("dy", ".35em")
        .attr("x", (d) => (d.children || d._children ? -13 : 13))
        .attr("text-anchor", (d) =>
          d.children || d._children ? "end" : "start"
        )
        .text((d) => d.data.name)
        .attr("class", "pointer-class")
        .on("click", showdef);

      const nodeUpdate = nodeEnter.merge(node);

      nodeUpdate
        .transition()
        .duration(750)
        .attr("transform", (d) => `translate(${d.y},${d.x})`);

      nodeUpdate
        .select("circle.node")
        .attr("r", 10)
        .style("fill", (d) => (d._children ? "lightsteelblue" : "#fff"))
        .attr("cursor", "pointer");

      const nodeExit = node
        .exit()
        .transition()
        .duration(750)
        .attr("transform", (d) => `translate(${source.y},${source.x})`)
        .remove();

      nodeExit.select("circle").attr("r", 1e-6);

      nodeExit.select("text").style("fill-opacity", 1e-6);

      const link = svg.selectAll("path.link").data(links, (d) => d.id);

      const linkEnter = link
        .enter()
        .insert("path", "g")
        .attr("class", "link")
        .attr("d", (d) => {
          const o = { x: source.x0, y: source.y0 };
          return diagonal(o, o);
        });

      const linkUpdate = linkEnter.merge(link);

      linkUpdate
        .transition()
        .duration(750)
        .attr("d", (d) => diagonal(d, d.parent));

      const linkExit = link
        .exit()
        .transition()
        .duration(750)
        .attr("d", (d) => {
          const o = { x: source.x, y: source.y };
          return diagonal(o, o);
        })
        .remove();

      nodes.forEach((d) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      function diagonal(s, d) {
        const path = `M ${s.y} ${s.x}
          C ${(s.y + d.y) / 2} ${s.x},
            ${(s.y + d.y) / 2} ${d.x},
            ${d.y} ${d.x}`;
        return path;
      }

      function click(event, d) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        update(d);
      }
    }

    function showdef(event, d) {
      d3.select("#description").text(`${d.data.name}: ${d.data.description}`);
    }
  }, [treeData]); // Only run when treeData changes

  return (
    <div className="card-body p-4">
      <h3 className="text-center" style={{ marginBottom: "50px", marginTop: "75px" }}>
        Concept
      </h3>
      <svg ref={svgRef}></svg>
      <div id="description" className="description"></div>
    </div>
  );
};

export default TreeDiagram;
