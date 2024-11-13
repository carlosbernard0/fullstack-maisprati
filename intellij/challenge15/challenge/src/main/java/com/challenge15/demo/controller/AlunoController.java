package com.challenge15.demo.controller;

import com.challenge15.demo.dto.AlunoDTO;
import com.challenge15.demo.entity.CursoEntity;
import com.challenge15.demo.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/alunos")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @GetMapping
    public List<AlunoDTO> getAllAlunos() {
        return alunoService.getAllUsers();
    }

    @GetMapping("/{id}")
    public AlunoDTO getAlunoById(@PathVariable Integer id) {
        return alunoService.getUserById(id);
    }

    @PostMapping
    public AlunoDTO createAluno(@RequestBody AlunoDTO alunoDTO) {
        return alunoService.createAluno(alunoDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AlunoDTO> updateAluno(@PathVariable Integer id, @RequestBody AlunoDTO userDTO) {
        AlunoDTO updateUser = alunoService.updateAluno(id, userDTO);
        return updateUser != null ? ResponseEntity.ok(updateUser) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAluno(@PathVariable Integer id) {
        alunoService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{alunoId}/matricular/{cursoId}")
    public ResponseEntity<AlunoDTO> matricularAlunoEmCurso(@PathVariable Long alunoId, @PathVariable Long cursoId) {
        AlunoDTO alunoDTO = alunoService.matricularAlunoEmCurso(alunoId, cursoId);
        return ResponseEntity.ok(alunoDTO);
    }

    @DeleteMapping("/{alunoId}/remover-curso/{cursoId}")
    public ResponseEntity<AlunoDTO> removerAlunoDeCurso(@PathVariable Long alunoId, @PathVariable Long cursoId) {
        AlunoDTO alunoDTO = alunoService.removerAlunoDeCurso(alunoId, cursoId);
        return ResponseEntity.ok(alunoDTO);
    }

    @GetMapping("/{alunoId}/cursos")
    public ResponseEntity<Set<CursoEntity>> listarCursosDeAluno(@PathVariable Long alunoId) {
        Set<CursoEntity> cursos = alunoService.listarCursosDeAluno(alunoId);
        return ResponseEntity.ok(cursos);
    }
}
